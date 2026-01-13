import Link from "next/link";

const categories = [
  {
    id: "web-basics",
    name: "Web 기본 개념",
    description:
      "인터넷과 웹의 기초부터 브라우저 동작 원리까지 웹의 근본적인 개념들을 다룹니다.",
    icon: "🌐",
    color: "from-blue-500 to-cyan-500",
    posts: 5,
  },
  {
    id: "html-css",
    name: "HTML/CSS",
    description:
      "웹 페이지의 구조를 만들고 아름다운 디자인을 적용하는 방법을 학습합니다.",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
    posts: 5,
  },
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "프론트엔드 개발의 핵심 언어로 동적인 웹 페이지를 만들 수 있는 기술을 익힙니다.",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    posts: 5,
  },
  {
    id: "react",
    name: "React",
    description:
      "현대적인 UI 라이브러리로 컴포넌트 기반의 효율적인 웹 애플리케이션을 개발합니다.",
    icon: "⚛️",
    color: "from-blue-500 to-indigo-500",
    posts: 5,
  },
  {
    id: "vue",
    name: "Vue.js",
    description:
      "직관적이고 배우기 쉬운 프론트엔드 프레임워크로 빠른 개발을 경험해보세요.",
    icon: "🟢",
    color: "from-green-500 to-emerald-500",
    posts: 5,
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <Link
          key={category.id}
          href={`/categories/${category.id}`}
          className="block"
        >
          <div
            className="card group h-full fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}
              >
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {category.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {category.posts}개의 포스트
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {category.description}
            </p>

            <div className="mt-4 flex items-center text-[var(--primary)] font-medium group-hover:text-[var(--secondary)] transition-colors">
              <span>카테고리 보기</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
