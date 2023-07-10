import { StaticImageData } from "next/image";
import avatar from "../images/avatar1.png";
import courseImg1 from "../images/couress-img-1.jpg";
import courseImg2 from "../images/couress-img-2.jpg";
import courseImg3 from "../images/couress-img-3.jpg";
import courseImg4 from "../images/couress-img-4.jpg";
import courseImg5 from "../images/couress-img-5.jpg";
import courseImg6 from "../images/couress-img-6.jpg";

interface Article {
  id: string;
  title: string;
  img: string | StaticImageData;
  teacherImg: string | StaticImageData;
  name: string;
  roll: string;
  degree: string;
  subj: string;
  courceFee: string;
  decressCourceFee: string;
  discount: string;
  instructor: string;
  lectures: number;
  duration: string;
  enrolled: string;
  language: string;
  courceTitle1: string;
  desc1: string;
  desc2: string;
  courceTitle2: string;
  desc3: string;
  desc4: string;
  tickTitle1: string;
  tickTitle2: string;
  tickTitle3: string;
  tickTitle4: string;
  courceTitle3: string;
  tableTitle1: string;
  tableTitle2: string;
  tableTitle3: string;
  tableData1: string;
  tableData2: string;
  tableData3: string;
  tableData4: string;
  tableData5: string;
  tableData6: string;
  courceTitle4: string;
  desc5: string;
  accordionTitle1: string;
  accordionTitle2: string;
  accordionTitle3: string;
  accordionDec1: string;
  accordionDec2: string;
  accordionDec3: string;
  desc6: string;
}

const articleData: Article[] = [
  {
    id: "1",
    title: "Biochemistry",
    img: courseImg1,
    teacherImg: avatar,
    name: "Robto Jone",
    roll: "Teacher",
    degree: "Biochemistry Class",
    subj: "Biochemistry",
    courceFee: "$59.00",
    decressCourceFee: "$129.00",
    discount: "35% OFF",
    instructor: "Eleanor Fant",
    lectures: 14,
    duration: "6 weeks",
    enrolled: "20 students",
    language: "English",
    courceTitle1: "Course Overview",
    desc1:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    desc2:
      "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.",
    courceTitle2: "What You Will Learn",
    desc3:
      "Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.",
    desc4:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    tickTitle1: "Crawl accessibility so engines can read your website",
    tickTitle2: "Share-worthy content that earns links, citations",
    tickTitle3: "Keyword optimized to attract searchers & engines",
    tickTitle4: "Title, URL, & description to draw high CTR",
    courceTitle3: "Study Options:",
    tableTitle1: "QUALIFICATION",
    tableTitle2: "LENGTH",
    tableTitle3: "CODE",
    tableData1: "Bsc (Hons)",
    tableData2: "3 years full time",
    tableData3: "CDX3",
    tableData4: "Bsc",
    tableData5: "4 years full time",
    tableData6: "CDX4",
    courceTitle4: "Frequently Asked Question",
    desc5:
      "A business or organization established to provide a particular service, typically one that involves a organizing transactions.Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.. ",
    accordionTitle1: "01 Cras turpis felis, elementum sed mi at arcu ?",
    accordionDec1:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle2:
      "02 Vestibulum nibh risus, in neque eleifendulputate sem ?",
    accordionDec2:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle3: "03 Donec maximus, sapien id auctor ornare ?",
    accordionDec3:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    desc6:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
  {
    id: "2",
    title: "Major in Economics",
    img: courseImg2,
    teacherImg: avatar,
    name: "Robto Jone",
    roll: "Teacher",
    degree: "Major in Economics",
    subj: "Economics",
    courceFee: "$99.00",
    decressCourceFee: "$129.00",
    discount: "35% OFF",
    instructor: "Eleanor Fant",
    lectures: 14,
    duration: "6 weeks",
    enrolled: "20 students",
    language: "English",
    courceTitle1: "Course Overview",
    desc1:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    desc2:
      "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.",
    courceTitle2: "What You Will Learn",
    desc3:
      "Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.",
    desc4:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    tickTitle1: "Crawl accessibility so engines can read your website",
    tickTitle2: "Share-worthy content that earns links, citations",
    tickTitle3: "Keyword optimized to attract searchers & engines",
    tickTitle4: "Title, URL, & description to draw high CTR",
    courceTitle3: "Study Options:",
    tableTitle1: "QUALIFICATION",
    tableTitle2: "LENGTH",
    tableTitle3: "CODE",
    tableData1: "Bsc (Hons)",
    tableData2: "3 years full time",
    tableData3: "CDX3",
    tableData4: "Bsc",
    tableData5: "4 years full time",
    tableData6: "CDX4",
    courceTitle4: "Frequently Asked Question",
    desc5:
      "A business or organization established to provide a particular service, typically one that involves a organizing transactions.Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.. ",
    accordionTitle1: "01 Cras turpis felis, elementum sed mi at arcu ?",
    accordionDec1:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle2:
      "02 Vestibulum nibh risus, in neque eleifendulputate sem ?",
    accordionDec2:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle3: "03 Donec maximus, sapien id auctor ornare ?",
    accordionDec3:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    desc6:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
  {
    id: "3",
    title: "Business Media",
    img: courseImg3,
    teacherImg: avatar,
    name: "Robto Jone",
    roll: "Teacher",
    degree: "Business Media    ",
    subj: "Media",
    courceFee: "$110.00",
    decressCourceFee: "$189.00",
    discount: "55% OFF",
    instructor: "Eleanor Fant",
    lectures: 14,
    duration: "6 weeks",
    enrolled: "20 students",
    language: "English",
    courceTitle1: "Course Overview",
    desc1:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    desc2:
      "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.",
    courceTitle2: "What You Will Learn",
    desc3:
      "Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.",
    desc4:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    tickTitle1: "Crawl accessibility so engines can read your website",
    tickTitle2: "Share-worthy content that earns links, citations",
    tickTitle3: "Keyword optimized to attract searchers & engines",
    tickTitle4: "Title, URL, & description to draw high CTR",
    courceTitle3: "Study Options:",
    tableTitle1: "QUALIFICATION",
    tableTitle2: "LENGTH",
    tableTitle3: "CODE",
    tableData1: "Bsc (Hons)",
    tableData2: "3 years full time",
    tableData3: "CDX3",
    tableData4: "Bsc",
    tableData5: "4 years full time",
    tableData6: "CDX4",
    courceTitle4: "Frequently Asked Question",
    desc5:
      "A business or organization established to provide a particular service, typically one that involves a organizing transactions.Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.. ",
    accordionTitle1: "01 Cras turpis felis, elementum sed mi at arcu ?",
    accordionDec1:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle2:
      "02 Vestibulum nibh risus, in neque eleifendulputate sem ?",
    accordionDec2:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle3: "03 Donec maximus, sapien id auctor ornare ?",
    accordionDec3:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    desc6:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
  {
    id: "4",
    title: "Public Administration",
    img: courseImg4,
    teacherImg: avatar,
    name: "Robto Jone",
    roll: "Teacher",
    degree: "Public Administration",
    subj: "Public",
    courceFee: "$89.00",
    decressCourceFee: "$189.00",
    discount: "70% OFF",
    instructor: "Eleanor Fant",
    lectures: 14,
    duration: "6 weeks",
    enrolled: "20 students",
    language: "English",
    courceTitle1: "Course Overview",
    desc1:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    desc2:
      "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.",
    courceTitle2: "What You Will Learn",
    desc3:
      "Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.",
    desc4:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    tickTitle1: "Crawl accessibility so engines can read your website",
    tickTitle2: "Share-worthy content that earns links, citations",
    tickTitle3: "Keyword optimized to attract searchers & engines",
    tickTitle4: "Title, URL, & description to draw high CTR",
    courceTitle3: "Study Options:",
    tableTitle1: "QUALIFICATION",
    tableTitle2: "LENGTH",
    tableTitle3: "CODE",
    tableData1: "Bsc (Hons)",
    tableData2: "3 years full time",
    tableData3: "CDX3",
    tableData4: "Bsc",
    tableData5: "4 years full time",
    tableData6: "CDX4",
    courceTitle4: "Frequently Asked Question",
    desc5:
      "A business or organization established to provide a particular service, typically one that involves a organizing transactions.Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.. ",
    accordionTitle1: "01 Cras turpis felis, elementum sed mi at arcu ?",
    accordionDec1:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle2:
      "02 Vestibulum nibh risus, in neque eleifendulputate sem ?",
    accordionDec2:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle3: "03 Donec maximus, sapien id auctor ornare ?",
    accordionDec3:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    desc6:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
  {
    id: "5",
    title: "Biotechnology",
    img: courseImg5,
    teacherImg: avatar,
    name: "Robto Jone",
    roll: "Teacher",
    degree: "Biotechnology",
    subj: "Sciences",
    courceFee: "$69.00",
    decressCourceFee: "$129.00",
    discount: "65% OFF",
    instructor: "Eleanor Fant",
    lectures: 14,
    duration: "6 weeks",
    enrolled: "20 students",
    language: "English",
    courceTitle1: "Course Overview",
    desc1:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    desc2:
      "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.",
    courceTitle2: "What You Will Learn",
    desc3:
      "Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.",
    desc4:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    tickTitle1: "Crawl accessibility so engines can read your website",
    tickTitle2: "Share-worthy content that earns links, citations",
    tickTitle3: "Keyword optimized to attract searchers & engines",
    tickTitle4: "Title, URL, & description to draw high CTR",
    courceTitle3: "Study Options:",
    tableTitle1: "QUALIFICATION",
    tableTitle2: "LENGTH",
    tableTitle3: "CODE",
    tableData1: "Bsc (Hons)",
    tableData2: "3 years full time",
    tableData3: "CDX3",
    tableData4: "Bsc",
    tableData5: "4 years full time",
    tableData6: "CDX4",
    courceTitle4: "Frequently Asked Question",
    desc5:
      "A business or organization established to provide a particular service, typically one that involves a organizing transactions.Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.. ",
    accordionTitle1: "01 Cras turpis felis, elementum sed mi at arcu ?",
    accordionDec1:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle2:
      "02 Vestibulum nibh risus, in neque eleifendulputate sem ?",
    accordionDec2:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle3: "03 Donec maximus, sapien id auctor ornare ?",
    accordionDec3:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    desc6:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
  {
    id: "6",
    title: "Corporate Finance",
    img: courseImg6,
    teacherImg: avatar,
    name: "Robto Jone",
    roll: "Teacher",
    degree: "Corporate Finance",
    subj: "Finance",
    courceFee: "$59.00",
    decressCourceFee: "$139.00",
    discount: "68% OFF",
    instructor: "Eleanor Fant",
    lectures: 14,
    duration: "6 weeks",
    enrolled: "20 students",
    language: "English",
    courceTitle1: "Course Overview",
    desc1:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    desc2:
      "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.",
    courceTitle2: "What You Will Learn",
    desc3:
      "Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.",
    desc4:
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.",
    tickTitle1: "Crawl accessibility so engines can read your website",
    tickTitle2: "Share-worthy content that earns links, citations",
    tickTitle3: "Keyword optimized to attract searchers & engines",
    tickTitle4: "Title, URL, & description to draw high CTR",
    courceTitle3: "Study Options:",
    tableTitle1: "QUALIFICATION",
    tableTitle2: "LENGTH",
    tableTitle3: "CODE",
    tableData1: "Bsc (Hons)",
    tableData2: "3 years full time",
    tableData3: "CDX3",
    tableData4: "Bsc",
    tableData5: "4 years full time",
    tableData6: "CDX4",
    courceTitle4: "Frequently Asked Question",
    desc5:
      "A business or organization established to provide a particular service, typically one that involves a organizing transactions.Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.. ",
    accordionTitle1: "01 Cras turpis felis, elementum sed mi at arcu ?",
    accordionDec1:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle2:
      "02 Vestibulum nibh risus, in neque eleifendulputate sem ?",
    accordionDec2:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    accordionTitle3: "03 Donec maximus, sapien id auctor ornare ?",
    accordionDec3:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
    desc6:
      "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
];

export default articleData;
