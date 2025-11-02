export const mobileAppShapes = [
{
    id: 1,
    title: "An attractive and user-friendly interface (UI/UX).",
    image: "/sdp_images/phone.png",
},
{
    id: 2,
    title: "High speed and performance.",
    image: "/sdp_images/limiter.png",
},
{
    id: 3,
    title: "Clean and maintainable code.",
    image: "/sdp_images/code.png",
},
{
    id: 4,
    title: "Continuous support and updates.",
    image: "/sdp_images/support.png",
},
{
    id: 5,
    title: "Publishing the app on app stores.",
    image: "/sdp_images/upload.png",
}    

];

export const ourProcess = [
    {
        id: 1,
        title: "Discovery & Research",
        description: "We understand your idea and the market needs.",
    },
    {
        id: 2,
        title: "Wireframes & Design",
        description: "We design a modern and seamless user experience.",
    },
    {
        id: 3,
        title: "Development",
        description: "Building the application with Flutter  Native.",
    },
    {
        id: 4,
        title: "Testing & QA",
        description: "We ensure quality and the absence of bugs.",
    },
    {
        id: 5,
        title: "Launch & Support",
        description: "App deployment + monitoring and maintenance",
    },
];


class MainTech {
  constructor(image, titles, icons) {
    this.image = image;
    this.titles = titles;
    this.icons = icons;
  }

  static data = [
    new MainTech(
      "/sdp_images/ui-ux.png",
      [
        "UX Research",
        "User Flows",
        "Brainstorming",
        "Documentation",
        "Wireframes",
        "User interview",
        "Design System Management",
        "UI Kits",
        "Prototyping",
      ],
      [
        "/sdp_images/figma.png",
        "/sdp_images/figma 2.png",
        "/sdp_images/img14.png",
        "/sdp_images/notion.png",
      ]
    ),
    new MainTech(
      "/sdp_images/front-end.png",
      [
        "UX Research",
        "User Flows",
        "Brainstorming",
        "Documentation",
        "Wireframes",
        "User interview",
        "Design System Management",
        "UI Kits",
        "Prototyping",
      ],
      [
        "/sdp_images/figma.png",
        "/sdp_images/figma 2.png",
        "/sdp_images/img14.png",
        "/sdp_images/notion.png",
      ]
    ),
    new MainTech(
      "/sdp_images/back-end.png",
      [
        "UX Research",
        "User Flows",
        "Brainstorming",
        "Documentation",
        "Wireframes",
        "User interview",
        "Design System Management",
        "UI Kits",
        "Prototyping",
      ],
      [
        "/sdp_images/figma.png",
        "/sdp_images/figma 2.png",
        "/sdp_images/img14.png",
        "/sdp_images/notion.png",
      ]
    ),
    new MainTech(
      "/sdp_images/database.png",
      [
        "UX Research",
        "User Flows",
        "Brainstorming",
        "Documentation",
        "Wireframes",
        "User interview",
        "Design System Management",
        "UI Kits",
        "Prototyping",
      ],
      [
        "/sdp_images/figma.png",
        "/sdp_images/figma 2.png",
        "/sdp_images/img14.png",
        "/sdp_images/notion.png",
      ]
    ),
    new MainTech(
      "/sdp_images/tools.png",
      [
        "UX Research",
        "User Flows",
        "Brainstorming",
        "Documentation",
        "Wireframes",
        "User interview",
        "Design System Management",
        "UI Kits",
        "Prototyping",
      ],
      [
        "/sdp_images/figma.png",
        "/sdp_images/figma 2.png",
        "/sdp_images/img14.png",
        "/sdp_images/notion.png",
      ]
    ),
  ];
}

export default MainTech;
