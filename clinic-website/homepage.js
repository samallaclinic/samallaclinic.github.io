import article1 from './blogArticles/article-1.md';
import article2 from './blogArticles/article-2.md';

const getHomePageData = () => {
  return {
    homepage: {
      title: "Samalla Clinic Ltd.",
      subtitle: 'Leader in Preventive Medicine',
      description: 'Welcome to a Family Practice that promises to keep your healthy and put a smile on your face.'
    },
    blogArticles: [
      {
        title: 'Reducing Needle-Stick Injuries',
        date: 'August 23, 2021',
        shortDescription: 'Samalla Clinic Ltd. is leading the way to ensure health workers are apporach to reducing needle-stick injuries in our latest article on preventive behaviours.',
        fullArticle: article1
      },
      {
        title: 'The COVID-19 Delta Variant - All You Need to Know',
        date: 'August 17, 2021',
        shortDescription: 'In recent weeks, the Delta variant of the COVID-19 virus has dominated major news headlines, necessitated tighter restrictions and prompted sterner warnings from health officials and institutions across the globe.',
        fullArticle: article2
      }
    ]
  }
}

export default getHomePageData;