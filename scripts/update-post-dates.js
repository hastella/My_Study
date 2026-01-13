const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const matter = require('gray-matter')

const postsDirectory = path.join(__dirname, '..', 'content', 'posts')

function getGitCommitDate(filePath) {
  try {
    const gitCommand = `git log --follow --format=%ai --date=iso -1 -- "${filePath}"`
    const result = execSync(gitCommand, { encoding: 'utf-8' }).trim()

    if (result) {
      return result.split(' ')[0] // YYYY-MM-DD 형식으로 반환
    }
  } catch (error) {
    console.warn(`Could not get git commit date for ${filePath}:`, error.message)
  }

  return null
}

function updatePostDate(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const gitCommitDate = getGitCommitDate(filePath)

  if (gitCommitDate) {
    console.log(`Updating ${path.basename(filePath)}: ${data.date || 'No date'} → ${gitCommitDate}`)

    // front matter 업데이트
    const updatedData = {
      ...data,
      date: gitCommitDate,
      last_modified_at: new Date().toISOString()
    }

    const updatedContent = matter.stringify(content, updatedData)

    fs.writeFileSync(filePath, updatedContent)
  } else {
    console.log(`Skipping ${path.basename(filePath)}: Could not get git commit date`)
  }
}

function updateAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    console.error('Posts directory not found:', postsDirectory)
    return
  }

  const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'))

  console.log(`Found ${files.length} markdown files. Updating dates based on Git commits...`)

  files.forEach(file => {
    const filePath = path.join(postsDirectory, file)
    updatePostDate(filePath)
  })

  console.log('✅ All posts updated with Git commit dates!')
}

if (require.main === module) {
  updateAllPosts()
}

module.exports = { updateAllPosts, updatePostDate, getGitCommitDate }
