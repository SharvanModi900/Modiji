// import logo from '../src/assets/A__3_-removebg-preview.png';
// import projectAutoGenerator from '../src/assets/icons8-fan-auto-48.png';
// import ProjectworkGenerator from '../src/assets/icons8-product-architecture-24.png'
// import codeAutomation from '../src/assets/icons8-play-48.png'; 
// import UMLDiagram from '../src/assets/icons8-flow-64.png';
// import importProject from '../src/assets/icons8-import-16.png';
// import codeAssitance from '../src/assets/icons8-person-pilot-48.png'
// // Define RichFeatureDetails separately
// const RichFeatureDetails = [
//     {
//         title: 'Auto generate project structure',
//         subTitle: 'This is the subline of text that provides more information about the card',
//         icons: projectAutoGenerator
//     },
//     {
//         title: 'Auto generate project workflow',
//         subTitle: 'This is the subline of text that provides more information about the card',
//         icons: ProjectworkGenerator,
//     },
//     {
//         title: 'Intelligent Source Code Automation',
//         subTitle: 'This is the subline of text that provides more information about the card',
//         icons: codeAutomation,
//     },
//     {
//         title: 'UML diagram auto generation',
//         subTitle: 'This is the subline of text that provides more information about the card',
//         icons: UMLDiagram
//     },
//     {
//         title: 'code asistance',
//         subTitle: 'This is the subline of text that provides more information about the card',
//         icons: codeAssitance
//     },
//     {
//         title: 'project imports',
//         subTitle: 'This is the subline of text that provides more information about the card',
//         icons: importProject
//     },
//     {
//         title: 'project imports',
//         subTitle: 'This is the subline of text that provides more information about the card',
//         icons: importProject
//     },
//     {
//         title: 'project imports',
//         subTitle: 'This is the subline of text that provides more information about the card',
//         icons: importProject
//     }
// ];

// // Define company array with RichFeatureDetails as one of its properties
// export const company = [
//     {
//         brandName: 'Oinek',
//         industry: 'Technology',
//         founded: 2021,
//         headquarters: 'San Francisco, CA',
//         products: ['Software', 'Hardware'],
//         brandLogo: logo,
//         features: RichFeatureDetails  // Include RichFeatureDetails here
//     }
// ];

import logo from '../src/assets/A__3_-removebg-preview.png';
import projectAutoGenerator from '../src/assets/icons8-fan-auto-48.png';
import ProjectworkGenerator from '../src/assets/icons8-product-architecture-24.png';
import codeAutomation from '../src/assets/icons8-play-48.png'; 
import UMLDiagram from '../src/assets/icons8-flow-64.png';
import importProject from '../src/assets/icons8-import-16.png';
import codeAssitance from '../src/assets/icons8-person-pilot-48.png';

// Define RichFeatureDetails separately
const RichFeatureDetails = [
    {
        title: 'Automated Project Structure Generation',
        subTitle: 'Effortlessly generate and organize project structures with automation for a streamlined setup.',
        icons: projectAutoGenerator
    },
    {
        title: 'Workflow Automation for Projects',
        subTitle: 'Create and manage project workflows automatically to enhance efficiency and reduce manual effort.',
        icons: ProjectworkGenerator,
    },
    {
        title: 'Smart Source Code Automation',
        subTitle: 'Leverage intelligent automation to manage and optimize your source code seamlessly.',
        icons: codeAutomation,
    },
    {
        title: 'Automated UML Diagram Creation',
        subTitle: 'Generate UML diagrams automatically to visualize and document your project architecture',
        icons: UMLDiagram
    },
    {
        title: 'Advanced Source Code Assistance',
        subTitle: 'Receive contextual code assistance to boost productivity and reduce errors during development.',
        icons: codeAssitance
    },
    {
        title: 'Efficient Project Import Tools',
        subTitle: 'Simplify the process of importing projects with advanced tools designed for seamless integration.',
        icons: importProject
    },
    {
        title: 'Streamlined Project Import Features',
        subTitle: 'Experience enhanced import functionalities for a more efficient project setup and management.',
        icons: importProject
    },
    {
        title: 'Comprehensive Project Import Solutions',
        subTitle: 'Utilize comprehensive solutions for importing projects, ensuring smooth transitions and setups.',
        icons: importProject
    }
];

const codeAutomations = [
    {
        title: 'New Era of AI Editor',
        subTitle: 'Revolutionize Your Coding Experience: The New Era of AI-Powered Text Editing.',
        
    },
    {
        title: 'AI Code Editing',
        subTitle: 'AI-Driven Code Editing: Precision, Efficiency, and Intelligence at Your Fingertips.',
        
    },
    {
        title: 'Streamline Your Coding with the Power of AI',
        subTitle: 'Transform Your Coding Workflow: Streamline and Optimize with Cutting-Edge AI Technology.',
        
    },
    {
        title: 'Efficient, Intelligent, and Automated',
        subTitle: 'Effortless Coding: Experience Efficiency, Intelligence, and Automation with AI Integration.',
        
    }
]

export const company = [
    {
        brandName: 'Oinek',
        industry: 'Technology',
        founded: 2021,
        headquarters: 'San Francisco, CA',
        products: ['Software', 'Hardware'],
        brandLogo: logo,
        features: RichFeatureDetails ,
        codeAutoma:codeAutomations

    }
];
