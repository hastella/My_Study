const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(__dirname, '..', 'content', 'posts')

function createPost(title, categories = [], excerpt = '') {
  // 제목을 기반으로 slug 생성
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '') // 특수문자 제거
    .replace(/\s+/g, '-') // 공백을 하이픈으로
    .replace(/-+/g, '-') // 연속된 하이픈 제거
    .trim()

  // 현재 날짜로 파일명 생성
  const today = new Date()
  const dateString = today.toISOString().split('T')[0] // YYYY-MM-DD 형식
  const fileName = `${dateString}-${slug}.md`
  const filePath = path.join(postsDirectory, fileName)

  // front matter 생성
  const frontMatter = {
    title: title,
    date: dateString,
    categories: categories,
    tags: categories, // 기본적으로 categories를 tags로도 사용
    excerpt: excerpt || `${title}에 대한 내용을 다룹니다.`,
  }

  // 기본 마크다운 콘텐츠
  const content = `# ${title}

${excerpt ? excerpt + '\n\n' : ''}## 소개

여기에 내용을 작성하세요.

## 본론

자세한 내용을 작성하세요.

## 결론

마무리 내용을 작성하세요.

---

*이 포스트는 ${dateString}에 작성되었습니다.*
`

  const fileContent = matter.stringify(content, frontMatter)

  // 파일 생성
  fs.writeFileSync(filePath, fileContent)

  console.log(`✅ 포스트 생성 완료: ${fileName}`)
  console.log(`📝 제목: ${title}`)
  console.log(`📅 날짜: ${dateString}`)
  console.log(`🏷️ 카테고리: ${categories.join(', ') || '없음'}`)
  console.log(`📄 파일 경로: ${filePath}`)
  console.log('')
  console.log('💡 다음 단계:')
  console.log('1. 생성된 파일을 열어서 내용을 작성하세요')
  console.log('2. git add, commit, push로 변경사항을 저장하세요')
  console.log('3. 블로그에서 새로운 포스트를 확인하세요')

  return filePath
}

// 커맨드 라인에서 실행할 때
if (require.main === module) {
  const args = process.argv.slice(2)

  if (args.length < 1) {
    console.log('사용법: node create-post.js "포스트 제목" [카테고리1,카테고리2,...] [요약문]')
    console.log('예시: node create-post.js "React 기초 배우기" "react,javascript" "React의 기본 개념을 배워보자"')
    process.exit(1)
  }

  const title = args[0]
  const categories = args[1] ? args[1].split(',') : []
  const excerpt = args[2] || ''

  createPost(title, categories, excerpt)
}

module.exports = { createPost }
