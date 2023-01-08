const quotes = [
    {
        quote: "한낱 빛 따위가 어둠의 깊이를 어찌 알랴.",
        author: "-프리드리히 니체-",
    },
    {
        quote: "풍파 없는 항해, 얼마나 단조로운가!, 고난이 심할수록 내 가슴은 뛴다.",
        author: "-프리드리히 니체-",
    },
    {
        quote: "네 운명을 사랑하라.",
        author: "-프리드리히 니체-",
    },
    {
        quote: "몇 번이라도 좋다. 이 끔찍한 삶이여, 다시 한 번!",
        author: "-프리드리히 니체-",
    },
    {
        quote: "그대의 영혼 속에 깃들어 있는 영웅을 절대 버리지 않기를.",
        author: "-프리드리히 니체-",
    },
    {
        quote: "아무 것도 성취하지 못했을지라도 자신을 존경하라, 거기에 상황을 바꿀 힘이 있으니.",
        author: "-프리드리히 니체-",
    },
    {
        quote: "괴물과 싸우는 사람은 스스로 괴물이 되지 않도록 조심하라.",
        author: "-프리드리히 니체-",
    },
    {
        quote: "상처에 의해 정신은 고양되고, 새로운 힘은 솟아 오른다.",
        author: "-프리드리히 니체-",
    },
    {
        quote: "춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다.",
        author: "-프리드리히 니체-",
    },
    {
        quote: "가장 조용하고 가벼운 것, 숨결 하나, 한 순간, 작은 것이 최상의 행복을 만든다.",
        author: "-프리드리히 니체-",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
