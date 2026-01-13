export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">My Study Notes</h1>
      <p className="text-lg mb-8">프론트엔드 개발 공부 블로그입니다.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">📚 최근 포스트</h2>
        <div className="space-y-2">
          <a
            href="/blog/typescript-basics"
            className="block p-4 border rounded hover:bg-gray-50"
          >
            <h3 className="font-bold">TypeScript 기초부터 고급까지</h3>
            <p className="text-gray-600">
              TypeScript의 핵심 개념과 실전 활용법을 배워보자
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
