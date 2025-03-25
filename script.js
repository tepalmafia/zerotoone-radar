// 회사 데이터
const companies = [
    {
        name: "Palantir",
        industry: "AI",
        description: "데이터 분석 플랫폼으로, 정부와 기업을 위한 혁신적인 데이터 솔루션을 제공합니다.",
        coreBusiness: "빅데이터 분석 플랫폼 Foundry와 Gotham을 통해 기업과 정부 기관에 데이터 통합, 관리, 분석 솔루션을 제공",
        executives: [
            "CEO: Alex Karp - 스탠포드 박사, 17년간 CEO 역임",
            "Co-founder: Peter Thiel - PayPal 공동창업자",
            "CTO: Shyam Sankar - 10년 이상 기술 총괄"
        ],
        shareholding: [
            "Peter Thiel: 약 8%",
            "Alex Karp: 약 5%",
            "기관투자자: 약 45%",
            "기타: 42%"
        ],
        investmentPoints: [
            "정부 계약을 통한 안정적 수익",
            "상용 시장 확장 중",
            "AI/ML 기술 선도",
            "높은 고객 유지율"
        ],
        valuation: {
            marketCap: "약 $45B (2023)",
            revenue: "2022년 $1.9B",
            growth: "연간 30%+ 성장"
        },
        financials: {
            revenue2022: "$1.9B",
            revenue2021: "$1.5B",
            margin: "24% (2022)",
            cash: "$2.6B"
        }
    },
    {
        name: "SpaceX",
        industry: "우주",
        description: "재사용 가능한 로켓을 개발하여 우주 탐사 비용을 획기적으로 낮추고, 화성 식민지 건설을 목표로 합니다.",
        coreBusiness: "재사용 가능한 로켓 기술과 위성 인터넷 서비스 Starlink",
        executives: [
            "CEO: Elon Musk - Tesla CEO, 선구적인 우주산업 비전 제시",
            "COO: Gwynne Shotwell - 15년 이상 운영 총괄",
            "CTO: Tom Mueller - 로켓 엔진 설계 전문가"
        ],
        shareholding: [
            "Elon Musk: 약 47%",
            "Google/Fidelity: 약 10%",
            "기타 투자자: 43%"
        ],
        investmentPoints: [
            "재사용 로켓 기술로 발사 비용 90% 감소",
            "Starlink 통한 안정적 수익원 확보",
            "NASA 계약 및 정부 프로젝트",
            "화성 탐사 프로젝트"
        ],
        valuation: {
            marketCap: "약 $150B (비상장)",
            revenue: "2022년 추정 $4.6B",
            growth: "연간 50%+ 성장"
        },
        financials: {
            revenue2022: "$4.6B (추정)",
            revenue2021: "$2.8B",
            margin: "미공개",
            cash: "약 $5B"
        }
    },
    {
        name: "OpenAI",
        industry: "AI",
        description: "인공지능의 안전한 발전을 추구하며, AGI(인공 일반 지능) 개발을 목표로 합니다.",
        coreBusiness: "ChatGPT, GPT-4 등 대규모 언어 모델과 DALL-E 이미지 생성 AI",
        executives: [
            "CEO: Sam Altman - Y Combinator 전 대표",
            "CTO: Mira Murati - AI 연구 및 개발 총괄",
            "Chief Scientist: Ilya Sutskever - 딥러닝 전문가"
        ],
        shareholding: [
            "Microsoft: 약 49%",
            "기타 투자자: 51%",
            "비영리 이사회 통제"
        ],
        investmentPoints: [
            "AI 기술 선도",
            "Microsoft와의 전략적 파트너십",
            "강력한 연구진과 기술력",
            "API 사업 모델"
        ],
        valuation: {
            marketCap: "약 $90B (비상장)",
            revenue: "연간 $1B+ 예상",
            growth: "급격한 성장세"
        },
        financials: {
            revenue2022: "약 $1B (추정)",
            revenue2021: "미공개",
            margin: "미공개",
            cash: "미공개"
        }
    },
    {
        name: "Neuralink",
        industry: "바이오",
        description: "뇌-컴퓨터 인터페이스 기술을 개발하여 인간의 인지 능력을 향상시키는 혁신을 추구합니다.",
        coreBusiness: "뇌-컴퓨터 인터페이스 개발, 신경과학 연구",
        executives: [
            "CEO: Elon Musk - Tesla, SpaceX CEO",
            "President: Max Hodak - 신경과학 전문가",
            "Director of Research: Vanessa Tolosa - 생체공학 전문가"
        ],
        shareholding: [
            "Elon Musk: 주요 지분",
            "기타 투자자: 비공개"
        ],
        investmentPoints: [
            "혁신적인 뇌-컴퓨터 인터페이스 기술",
            "의료 응용 가능성",
            "강력한 R&D 팀",
            "FDA 승인 진행 중"
        ],
        valuation: {
            marketCap: "약 $5B (비상장)",
            revenue: "아직 수익 없음",
            growth: "R&D 단계"
        },
        financials: {
            revenue2022: "수익 없음",
            revenue2021: "수익 없음",
            margin: "해당 없음",
            cash: "비공개"
        }
    },
    {
        name: "Tesla",
        industry: "에너지",
        description: "전기차와 지속 가능한 에너지 솔루션을 개발하여 친환경 미래를 선도합니다.",
        coreBusiness: "전기자동차 제조, 배터리 기술, 태양광 에너지 솔루션",
        executives: [
            "CEO: Elon Musk - 제품 전략 및 기술 혁신 주도",
            "CFO: Zachary Kirkhorn - 재무 전략 총괄",
            "SVP: Drew Baglino - 파워트레인 개발 책임"
        ],
        shareholding: [
            "Elon Musk: 약 13%",
            "기관투자자: 약 45%",
            "개인투자자: 약 42%"
        ],
        investmentPoints: [
            "전기차 시장 선도",
            "자율주행 기술 개발",
            "배터리 기술 혁신",
            "에너지 저장 사업 확장"
        ],
        valuation: {
            marketCap: "약 $800B",
            revenue: "2022년 $81.5B",
            growth: "연간 40%+ 성장"
        },
        financials: {
            revenue2022: "$81.5B",
            revenue2021: "$53.8B",
            margin: "16.8%",
            cash: "$22.2B"
        }
    },
    {
        name: "Stripe",
        industry: "기타",
        description: "온라인 결제 시스템을 혁신하여 전 세계 전자상거래의 인프라를 구축합니다.",
        coreBusiness: "온라인 결제 처리, 금융 인프라 API 제공",
        executives: [
            "CEO: Patrick Collison - 공동창업자",
            "President: John Collison - 공동창업자",
            "CTO: David Singleton - 기술 개발 총괄"
        ],
        shareholding: [
            "Collison 형제: 약 25%",
            "벤처캐피탈: 약 45%",
            "임직원: 약 30%"
        ],
        investmentPoints: [
            "글로벌 결제 시장 선도",
            "높은 기술력과 사용성",
            "다양한 금융 서비스 확장",
            "강력한 개발자 생태계"
        ],
        valuation: {
            marketCap: "약 $50B (비상장)",
            revenue: "2022년 $14B+",
            growth: "연간 60%+ 성장"
        },
        financials: {
            revenue2022: "$14B+",
            revenue2021: "$7.4B",
            margin: "약 10-15%",
            cash: "비공개"
        }
    }
];

// DOM 요소
const companiesContainer = document.getElementById('companies');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-buttons button');
const modal = document.getElementById('companyModal');
const closeButton = document.querySelector('.close-button');

let currentIndustry = '전체';
let searchQuery = '';

// 회사 카드 생성 함수
function createCompanyCard(company) {
    const card = document.createElement('div');
    card.className = 'company-card';
    card.innerHTML = `
        <h2>${company.name}</h2>
        <span class="industry-tag">${company.industry}</span>
        <p>${company.description}</p>
        <a href="#" class="read-more">자세히 보기</a>
    `;
    
    card.addEventListener('click', () => showCompanyDetails(company));
    return card;
}

// 회사 상세 정보 표시 함수
function showCompanyDetails(company) {
    document.getElementById('modalCompanyName').textContent = company.name;
    document.getElementById('modalIndustryTag').textContent = company.industry;
    document.getElementById('modalCoreBusiness').textContent = company.coreBusiness;
    
    document.getElementById('modalExecutives').innerHTML = company.executives.map(exec => `<p>${exec}</p>`).join('');
    document.getElementById('modalShareholding').innerHTML = company.shareholding.map(share => `<p>${share}</p>`).join('');
    document.getElementById('modalInvestmentPoints').innerHTML = company.investmentPoints.map(point => `<p>• ${point}</p>`).join('');
    
    const valuation = company.valuation;
    document.getElementById('modalValuation').innerHTML = `
        <p>시가총액: ${valuation.marketCap}</p>
        <p>매출: ${valuation.revenue}</p>
        <p>성장률: ${valuation.growth}</p>
    `;
    
    const financials = company.financials;
    document.getElementById('modalFinancials').innerHTML = `
        <p>2022년 매출: ${financials.revenue2022}</p>
        <p>2021년 매출: ${financials.revenue2021}</p>
        <p>영업이익률: ${financials.margin}</p>
        <p>현금 보유: ${financials.cash}</p>
    `;
    
    modal.style.display = 'block';
}

// 회사 필터링 함수
function filterCompanies() {
    const filteredCompanies = companies.filter(company => {
        const matchesIndustry = currentIndustry === '전체' || company.industry === currentIndustry;
        const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            company.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesIndustry && matchesSearch;
    });
    
    companiesContainer.innerHTML = '';
    filteredCompanies.forEach(company => {
        companiesContainer.appendChild(createCompanyCard(company));
    });
}

// 이벤트 리스너
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterCompanies();
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentIndustry = button.dataset.industry;
        filterCompanies();
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 초기 렌더링
filterCompanies();
