import { useState } from "react";

function NewsDetail({ article, onBack }) {
    const [showSummary, setShowSummary] = useState(false);

    return (
      <div className="news-detail-container">
        <button className="back-button" onClick={onBack}>
          ←
        </button>

        <h2>{article.title}</h2>
        <p>{article.content}</p>

        <section className="full-article">
          <p>
            SK텔레콤이 유심 해킹 사태로 인해 손상된 고객 신뢰 회복을 위해 독립
            기구인 '고객 신뢰 위원회'를 발족했다. 외부 전문가 5명으로 구성된
            위원회에서는 SKT가 마련한 고객 신뢰 향상 방안을 검증한다. SKT는
            고객신뢰 위원회를 지난 16일 발족하고 첫 회의를 했다고 18일 밝혔다.
            위원장은 안완기 전 한국생산성본부 회장(현 한국공학대학 석좌교수)이
            맡았다. 위원은 신종원 전 소비자분쟁조정위원장, 손정혜 법무법인 혜명
            변호사, 김난도 서울대 소비자학과 교수, 김채연 고려대 심리학부 교수
            등이다. 첫 회의에서는 위원회의 역할, 운영 방식, 향후 일정 등을
            논의했다. 위원들은 위원회의 다양한 활동에 대한 사회적 신뢰와
            이해도를 제고하고 고객에게 투명하게 알릴 수 있는 채널을 만들기로
            뜻을 모았다. 위원회는 고객 신뢰 회복을 위한 회사의 중장기 로드맵을
            요구하고 이를 검토한 후 발표하기로 했다. SKT는 기존 회사 내부 조직인
            '고객가치혁신실'을 위원회 간사 조직으로 배치해 위원회의 자문
            조치들이 빠르게 실행될 수 있도록 돕는다는 방침이다. 위원회 활동
            기간은 2년으로 정했다. 지난 12일에는 회사 내 '고객가치혁신TF'를
            신설해 중장기 고객가치 향상 방안을 검토하기로 했다. 고객신뢰
            위원회에서는 TF에서 마련한 방안을 검증하고 개선 사항을 제시한다.
            이와 함께 SKT는 해킹 침해 사고 관련 고객 보호 조치 일환으로 디지털
            취약계층 대상 '찾아가는 서비스'를 19일부터 시행한다. 그간 유심 교체
            등을 원하지만 매장 접근성이 떨어지는 지역과 매장 방문이 어려운
            취약계층이 있다는 지적이 지속된 데 대한 후속 조치다. SKT는 내달
            말까지 전국 도서벽지 100여개 지역 300여 곳을 찾아가기로 했다. 인천
            옹진군, 전라남도 신안군, 충청남도 태안군, 경상북도 의성군, 경상남도
            통영시 등을 찾는다. 구성원이 직접 도서 벽지 노령층을 중심으로
            '유심보호서비스'를 설명하고 유심 교체와 재설정 솔루션을 제공한다.
          </p>
          <p>
            우다다다다다
            우다다다다다우아다
            우다다다다다우아다
          </p>
        </section>

        {/* AI 요약 플로팅 버튼 */}
        <button
            className="ai-float-button"
            onClick={() => setShowSummary(!showSummary)}
        >✨ 요약
        </button>

        {/* 요약 결과 박스 */}
        {showSummary && (
            <div className="summary-box">
                <h4>AI 요약 결과</h4>
                <p>
                    이 내용은 본문 내용을 요약한 것으로,
                    주요 포인트는 A, B, C 입니다.
                    블라블라
                </p>
            </div>
        )}
      </div>
    );
}

export default NewsDetail;