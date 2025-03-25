// Zero to One 기업 데이터
const companies = [
    {
        name: "Palantir",
        industry: "AI",
        description: "데이터 분석 플랫폼으로, 정부와 기업을 위한 혁신적인 보안 솔루션을 제공합니다. 독점적인 데이터 분석 기술을 보유하고 있습니다.",
        link: "https://www.palantir.com"
    },
    {
        name: "SpaceX",
        industry: "Space",
        description: "재사용 가능한 로켓을 개발하여 우주 탐사 비용을 혁신적으로 낮추고, 화성 식민지화를 목표로 합니다.",
        link: "https://www.spacex.com"
    },
    {
        name: "OpenAI",
        industry: "AI",
        description: "인공지능의 안전한 발전을 추구하며, AGI(인공 일반 지능) 개발을 선도합니다.",
        link: "https://openai.com"
    },
    {
        name: "Neuralink",
        industry: "Biotech",
        description: "뇌-컴퓨터 인터페이스 기술을 개발하여 인간의 인지 능력을 향상시키는 혁신을 추구합니다.",
        link: "https://www.neuralink.com"
    },
    {
        name: "Tesla",
        industry: "Energy",
        description: "전기차와 자율주행 기술로 자동차 산업을 혁신하고, 지속 가능한 에너지 솔루션을 제공합니다.",
        link: "https://www.tesla.com"
    },
    {
        name: "Stripe",
        industry: "Other",
        description: "온라인 결제 시스템을 혁신하여 전 세계 전자상거래의 인프라를 구축합니다.",
        link: "https://stripe.com"
    }
];

// DOM 요소
const companiesContainer = document.getElementById('companiesContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// 현재 필터 상태
let currentIndustry = 'all';
let searchQuery = '';

// 회사 카드 생성 함수
function createCompanyCard(company) {
    return `
        <div class="company-card">
            <h2 class="company-name">${company.name}</h2>
            <span class="company-industry">${company.industry}</span>
            <p class="company-description">${company.description}</p>
            <a href="${company.link}" target="_blank" class="company-link">자세히 보기 →</a>
        </div>
    `;
}

// 회사 목록 필터링 함수
function filterCompanies() {
    return companies.filter(company => {
        const matchesIndustry = currentIndustry === 'all' || company.industry === currentIndustry;
        const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            company.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesIndustry && matchesSearch;
    });
}

// 회사 목록 렌더링 함수
function renderCompanies() {
    const filteredCompanies = filterCompanies();
    companiesContainer.innerHTML = filteredCompanies
        .map(company => createCompanyCard(company))
        .join('');
}

// 이벤트 리스너 설정
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCompanies();
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 활성 버튼 스타일 업데이트
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 필터 업데이트
        currentIndustry = button.dataset.industry;
        renderCompanies();
    });
});

// 초기 렌더링
renderCompanies(); 