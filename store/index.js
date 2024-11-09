export const state = () => ({
  projects: {
    '76100306-4f24-41c7-a217-24321264bb22': {
      title: 'Talking Microwave',
      people: { status: 'Group Project', icon: 'groups' },
      type: { status: 'RPi Hardware', icon: 'memory' },
      image: '20241013_172212.jpg',
      longdescription: `<div class="container my-1">
      <p class="lead">
                For the 2024 <a href="https://terriblehack.com">Terrible Ideas Hackathon</a> at Imperial College London, we produced a microwave that requires you to flirt with it to turn on.
            </p>
    <div class="row g-4 align-items-center">
        <div class="col-lg-6 col-md-6 col-12 text-center">
            <video width="100%" height="auto" controls>
                <source src="/microwave.webm" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
            <p>Depending on how well you flirt, the microwave will turn on for longer. It also provides 'sassy' verbal feedback over a speaker.</p>
            <p>The system works by using a Raspberry Pi 3, attached to a USB Microphone and AUX Speaker. The Pi connects to a button which the user holds while attempting to flirt, and a SSR to control the microwave. We leveraged Google Cloud Speech-to-Text and Text-to-Speech API's to process natural language to understand what the user was saying and to give the microwave a voice.</p>
            <p><a href="https://github.com/binaryYuki/">Tony</a> created an API with a model to perform sentiment analysis and generate reply text.</p>
            <p>This project was made in a group of 7. We won 2nd place!</p>
        </div>
    </div>
</div>

`,
      timeframedescription: 'October 2024',
      longimages: [
        '20241013_172212.jpg',
        '20241013_172214.jpg',
      ],
      tags: ['Raspberry Pi','University','RIE', 'Google Cloud', 'IoT', 'ML', 'AI', 'Event'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'See project on Instagram (@fez.infocus)',
          color: 'light',
          hyperlink:
            'https://www.instagram.com/p/DBCDaZjqRaz/',
        },
        {
          text: 'Project Github (Server/Raspberry Pi)',
          color: 'dark',
          hyperlink:
            'https://github.com/binaryyuki/crazy',
        },
      ],
    },

    '76100306-4f24-41c7-a717-243f946f2b21': {
      title: 'moduLo',
      people: { status: 'Group Project', icon: 'groups' },
      type: { status: 'Arduino Hardware', icon: 'memory' },
      image: 'modulo0.jpg',
      longdescription: `I was part of a team of four that developed moduLo. \n \n We built a sensor module that uses the Helium Network to measure Temperature, Humidity, eCO2 and Hydrogen Levels in the air \n \n We designed and 3d printed a case, which contains a custom PCB. It uses an ESP32, RFM9X radio, DHT11 Sensor, SGP30 Sensor along with various other components for power management and I/O. We power it off 4xAA batteries, and it’ll last just over 12 days.`,
      timeframedescription: 'March 2023',
      longimages: [
        'modulo1.jpg'
      ],
      tags: ['Microelectronics','Arduino','School','Helium','IoT'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Read Project Writeup',
          color: 'success',
          hyperlink:
            'https://drive.google.com/file/d/1Jtf9FSWT0lAMqlHmhTK2uYbNZoa9sMMB/view?usp=sharing',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/CREST-efficienttransmit',
        },
      ],
    },
    '76100306-4f24-41c7-a217-243f916f2b21': {
      title: 'Air Pollution Sensor',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'ESP32 Hardware', icon: 'memory' },
      image: '20240201_114546.jpg',
      longdescription: `For my Design and Technology A-Level, I made an Air Pollution Sensor module. \n \n The sensor uses a custom designed ESP32-based control board connected to various modules. \n \n Data is transmitted over WiFi every 5 hours to a MongoDB and Netlify Service. \n \n This project was made for the ExCeL convention centre in East London`,
      timeframedescription: 'March 2024',
      longimages: [
        '20240201_114500.jpg',
        '20240325_134527.jpg'
      ],
      tags: ['Microelectronics','Arduino','School','IoT', 'Esp32'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Read Project Writeup',
          color: 'success',
          hyperlink:
            'https://drive.google.com/file/d/1WD90wZ1ov6k9Smuvuso7LhB9yfZIKpyk/view?usp=sharing',
        },
        {
          text: 'Project Github (Hardware)',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/BadalSense-Pollution',
        },
        {
          text: 'Project Github (Server)',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/badalsense-pollution-website',
        },
      ],
    },

    '76100306-4f24-421a-a717-243f946f2b21': {
      title: 'Lovelace Hackathon',
      people: { status: 'Group Project', icon: 'groups' },
      type: { status: 'Event', icon: 'calendar' },
      image: 'lovelacehackathon.png',
      longdescription: `
    
      In February 2024, me and some friends organised and ran an online international Hackathon for 150 students aged 15-18 across 10+ schools. \n
      A team of 7 of us worked to create the questions, and develop/run a website to manage the Hackathon. \n
      The Hackathon Style was puzzle-solving based, as opposed to project based. It was a in teams to solve as many puzzle problems as possbile in 24 hours, later extended. \n
      I Built a platform in Nuxt.JS framework to manage users, teams and 20+ Hackathon puzzles.  \n
      I also hosted a user sandbox environment for testing and automarking of solutions. Users could send their code for auto marking on our server with safeguarding to protect our system such as time complexity and algorithm isolation. \n
      We used a Grist server on DigitalOcean hosted through Docker as a datastore; Ran a backend using Express.JS as Nuxt.JS 2 Middleware. \n
      <a href="https://github.com/s3yoonpark">Andrew</a> crashed my server.
    
      `,
      timeframedescription: 'February 2024',
      longimages: [
        'lovelacehackathon.png'
      ],
      tags: ['Event','Docker','Nuxt','Vue','School'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Read the Question Booklet',
          color: 'success',
          hyperlink:
            '/Lovelace Hackathon-2024-Booklet.pdf',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/harrow-css/lovelace-hackathon',
        },
      ],
    },

    '76100306-4f24-41c7-a717-243f946f2b21': {
      title: 'moduLo',
      people: { status: 'Group Project', icon: 'groups' },
      type: { status: 'Arduino Hardware', icon: 'memory' },
      image: 'modulo0.jpg',
      longdescription: `I was part of a team of four that developed moduLo. \n \n We built a sensor module that uses the Helium Network to measure Temperature, Humidity, eCO2 and Hydrogen Levels in the air \n \n We designed and 3d printed a case, which contains a custom PCB. It uses an ESP32, RFM9X radio, DHT11 Sensor, SGP30 Sensor along with various other components for power management and I/O. We power it off 4xAA batteries, and it’ll last just over 12 days.`,
      timeframedescription: 'March 2023',
      longimages: [
        'modulo1.jpg'
      ],
      tags: ['Microelectronics','Arduino','School','Helium','IoT'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Read Project Writeup',
          color: 'success',
          hyperlink:
            'https://drive.google.com/file/d/1Jtf9FSWT0lAMqlHmhTK2uYbNZoa9sMMB/view?usp=sharing',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/CREST-efficienttransmit',
        },
      ],
    },

    '76400d06-4f24-41c7-a717-243f946f2b21': {
      title: 'Project Agouti',
      people: { status: 'Group Project', icon: 'groups' },
      type: { status: 'Arduino Hardware', icon: 'memory' },
      image: 'agouti0.jpg',
      longdescription: `I was the project assistant director for 'Agouti' - an intelligent, weatherproof acoustic monitoring device that can be easily deployed for the recording and analyzing of audio data. \n We employed edgeML to automatically tag the microphone data for key event classes like insect sounds and birdsongs, human activity (e.g. vehicles), and logging (e.g. chainsaw noises), storing these tags together with their respective audios for human inspection. \n The device also records readings from temperature, humidity, and light sensors to link audio with the real world, quantifying exactly how the environment affects species' behaviours. `,
      timeframedescription: 'September 2022',
      longimages: [
        'agouti1.jpg'
      ],
      tags: ['Microelectronics','Arduino','School','Team Enigma','Environment','AI','ML', 'Raspberry Pi'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Read Project',
          color: 'success',
          hyperlink:
            'https://www.hackster.io/team-enigma/project-agouti-df34a4',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/agouti-acoustics',
        },
      ],
    },
    
    

    '1eeef068-0ca3-4b89-bba1-265e711692ba': {
      title: 'Vertex Racing Website',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Website', icon: 'web' },
      image: 'vertex0.png',
      longdescription: `I built the website for the F1 in Schools team Vertex Racing`,
      timeframedescription: 'June 2022',
      longimages: ['vertex1.png'],
      tags: ['Vertex','f1s','Vue','Nuxt','Bootstrap','School'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit Website',
          color: 'success',
          hyperlink:
            'https://vertexracing.org.uk/',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/VertexRacing',
        },
      ],
    },

    '3608ea04-9ce5-4e72-874d-abe065fa24f6': {
      title: 'Experiment : Webcam',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Website', icon: 'web' },
      image: 'webcam0.png',
      longdescription: `I made an image detection website with ML5.js that detects objects in the webcam and uses a tensorflow model to guess what they are.`,
      timeframedescription: 'May 2022',
      longimages: ['webcam1.png'],
      tags: ['Nuxt','Tensorflow','Bootstrap','ML5.js','ML','AI','Vue'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit Website',
          color: 'success',
          hyperlink:
            'https://webcam.experiments.dylankainth.com',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/nuxt-ml5-webcam-demo',
        },
      ],
    },

    'cd59d448-2ffd-4bad-a85f-7441d58fda11': {
      title: 'Experiment : Sentiment',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Website', icon: 'web' },
      image: 'sentiment0.png',
      longdescription: `I made a sentiment analysis website. The user inputs a string of text and it uses an ML5.js and Tensorflow model to calculate the sentiment of the passage. \n \n It is run in a Docker container on my home server, so it may have unreliable uptime.`,
      timeframedescription: 'May 2022',
      longimages: ['sentiment1.png'],
      tags: ['Nuxt','Tensorflow','Bootstrap','ML5.js','ML','AI','Vue'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit Website',
          color: 'success',
          hyperlink:
            'https://sentiment.experiments.dylankainth.com',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/nuxt-ml5-sentiment-demo',
        },
      ],
    },

    '1dbc680c-77cf-401e-b56c-88fbbdd260ce': {
      title: 'Harrow and the Hill Community Day',
      people: { status: 'Group Project', icon: 'groups' },
      type: { status: 'Website', icon: 'web' },
      image: 'communityday0.png',
      longdescription: `I helped develop the website for the Harrow School Harrow and the Hill Community Day event. `,
      timeframedescription: 'April 2022',
      longimages: ['communityday1.jpg','communityday2.png','communityday3.png','communityday4.jpg'],
      tags: ['HTML','Github Pages','CSS','School'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit Website',
          color: 'success',
          hyperlink:
            'https://harrowschool.io/450',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/harrowschool/harrowschool.github.io',
        },
      ],
    },

    '11c7e361-17e9-456b-8064-d0ecdca021c2': {
      title: 'ESPLCD',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Arduino Hardware', icon: 'memory' },
      image: 'esplcd0.jpg',
      longdescription: `I wired up a LCD screen to my ESP32. I then managed to get it to display weather data from openweathermap and the current song playing on Spotify through the Spotify API `,
      timeframedescription: 'March 2022',
      longimages: ['esplcd0.jpg'],
      tags: ['Esp32','Spotify','Microelectronics','Arduino'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/ESP32-LCD-Weather',
        },
        {
          text: 'Reddit Post',
          color: 'danger',
          hyperlink : 'https://www.reddit.com/r/electronics/comments/tt9dw8/esp32_connected_to_a_16x2_lcd_display/'
        }
      ],
    },

    '5abc1f69-288a-4f18-b6bc-82a1b82cafc5': {
      title: 'The Enigma Questions',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Website', icon: 'web' },
      image: 'te0.png',
      longdescription: `I built the Enimga Questions website. It allows people to answer computational-based challenge questions written by Team Enigma`,
      timeframedescription: 'March 2022',
      longimages: ['te0.png'],
      tags: ['Nuxt','Vue','Team Enigma','School'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit Website',
          color: 'success',
          hyperlink:
            'https://questions.teamenigma.ml/',
        },
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/Harrow-Enigma/Enigma-Questions',
        },
      ],
    },

    'c7293da1-3d77-49c3-9489-5ca5ab625f28': {
      title: 'CanvasGuesser',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Web Game', icon: 'sports_esports' },
      image: 'canvasguesser0.png',
      longdescription: `I made CanvasGuesser as a School Summer Project. It is a clone of [skribbl.io](https://skribbl.io/) \n \n It uses websockets to communicate to a Docker container inside a Linux Server. It uses the HTML canvas element for drawing and uses python-flask as a backend \n \n Unfortunately, I've shut it down. But I'd like to start it up again at some point, watch this space.`,
      timeframedescription: 'September 2021',
      longimages: [
        'canvasguesser1.png','canvasguesser2.png'
      ],
      tags: ['Docker','Websockets','Canvas','Python','Flask'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/CanvasGuesser',
        },
        {
          text: 'Visit Website',
          color: 'success',
          hyperlink:
            'https://canvasguesser.experiments.dylankainth.com/',
        },
      ],
    },

    '9c7e3482-8c31-4881-8e93-9af764f21ce7': {
      title: 'Silver Arrow Team Computer',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Arduino Hardware', icon: 'memory' },
      image: 'silverarrowcomputer0.png',
      longdescription: `I set up the on-board computer for the Greenpower team Silver Arrow Racing. It uses an MXCHIP IoT devkit to connect to thingsboard hosted on AWS EC2.`,
      timeframedescription: 'September 2022',
      longimages: ['silverarrowcomputer1.png'],
      tags: ['MXCHIP','IoT','AWS','Thingsboard','AZ3166','Microelectronics','Greenpower','School', 'Arduino'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/SilverArrowTeamComputer',
        }
      ],
    },

    'becb58f5-f1b3-4af5-9c7c-87dc208793ba': {
      title: 'Sheels Banding',
      people: { status: 'Commercial Project', icon: 'work' },
      type: { status: 'App', icon: 'smartphone' },
      image: 'sheelsbanding0.png',
      longdescription: `I worked with Sheels Educational to construct the Sheels Banding App. \n The app allows users to scan barcodes on children's books and retrieve details about it. \n \n  The app provides the Sheels Band for each book, this is a rating from the company which classifies the age at which children should read the book.  \n \n I recieved code that the previous developer had not completed and finished the app. I then repaired the AWS server that the app connects to. Finally, I uploaded and published the app to the Google Play and IOS app stores. \n \n The app was built using React Native.`,
      timeframedescription: 'August 2021',
      longimages: [
        'sheelsbanding1.png',
        'sheelsbanding2.png',
        'sheelsbanding3.png',
      ],
      tags: ['React Native', 'Android', 'IOS'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit the Sheels Website',
          color: 'primary',
          hyperlink:
            'https://www.sheelseducational.co.uk/pages/the-sheels-book-banding-app-new',
        },
        {
          text: 'Download on IOS',
          color: 'secondary',
          hyperlink: 'https://apps.apple.com/il/app/sheels/id1535147031',
        },
        {
          text: 'Download on Android',
          color: 'secondary',
          hyperlink: 'https://play.google.com/store/apps/details?id=com.sheelsapp&hl=en&gl=US',
        },
      ],
    },
    '29aa939b-2a8f-408c-8517-4984f2e4ba31': {
      title: 'Project Eco',
      people: { status: 'Group Project', icon: 'groups' },
      type: { status: 'Website', icon: 'web' },
      image: 'projecteco0.png',
      longdescription:
        'Project Eco tried to give the community the power to sustain the environment and inspire people to take action against its effects on mental well-being through our AI technology. \n During the development of this project, our team has found strong links between air quality and mental health. \n We aimed to predict such changes in our environment and give users the ability and knowledge to reduce the effects of pollutants, ensuring a cleaner and healthier future for all of us. \n \n **I was lead developer of Project Eco** and was responsible for desingning the server architecture and creating the website frontend in collaboration with [Filamity](https://ifal.dev). [PerceptronV](https://perceptronv.github.io/) constructed the AI model that we used in this project. \n \n We used a MEVN Stack, which used Node.js, Express.js, Vue.js and Node.js. Bootstrap was used in the frontend. \n \n Project Eco has been shut down',
      timeframedescription: 'July 2021',
      longimages: ['projecteco1.png'],
      tags: ['Environment', 'Esp32', 'MongoDB', 'Team Enigma', 'School','Microelectronics'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/Harrow-Enigma/TeamEnigma-ProjectEco-Webserver',
        },
        {
          text: 'Read More',
          color: 'success',
          hyperlink: 'https://teamenigma.ml/projects',
        },
        {
          text: 'Filamity\'s Blog Post',
          color: 'secondary',
          hyperlink:
            'https://ifal.dev/blog/K7wmNVpI0Ns0nXTnQYV1',
        },
      ],
    },
    '6d014ee0-13f0-4660-9eb2-49f260f9384c': {
      title: 'Monolith Tracker',
      people: { status: 'Open Source Project', icon: 'language' },
      type: { status: 'Website', icon: 'web' },
      image: 'monolith0.jpg',
      longdescription: `In early November 2020, metallic monoliths began appearing around the world; I worked with an international team to moderate and manage Monolith Mapper, a website-forum to catalog the monolith appearances around the world. \n \n We used a classification system developed on Reddit by [u/walkyou](https://www.reddit.com/user/Walkyou). \n \n The system architecture is based on Drupal. I built a Docker-Flask application that interfaces with the API to make PDF exports of the entire wiki.`,
      timeframedescription: 'December 2020',
      longimages: [
        'monolith1.png','monolith2.png','monolith3.png'
      ],
      tags: ['Drupal'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit Monolith Mapper',
          color: 'primary',
          hyperlink:
            'https://monolithtracker.com/',
        },
        {
          text: 'Join the discord',
          color: 'secondary',
          hyperlink: 'https://discord.gg/HnXyYk6Vcb',
        },
    
      ],
    },
    '0421647f-1d63-47b5-929c-87dc70a4f456': {
      title: 'HomerDash',
      people: { status: 'Open Source Project', icon: 'language' },
      type: { status: 'Python Utility', icon: 'desktop_windows' },
      image: 'homerdash0.png',
      longdescription: `**HomerDash aims to convert your homer YAML into a Dashmachine .ini config file, saving hours of re-writing.** \n \n [Homer](https://github.com/bastienwirtz/homer) is a simple static  *HOM*epage for your serv*ER*  to keep your services on hand, customisable from a simple  '.yaml'  configuration file. \n [Dashmachine](https://github.com/rmountjoy92/DashMachine) is another application bookmark dashboard, with fun features and is configurable from a '.ini' file. \n \n **HomerDash** is a **python** utility tool that allows the conversion of **Homer '.yaml' files** to  **Dashmachine '.ini' files.**`,
      timeframedescription: 'December 2020',
      longimages: [
        'homerdash0.png','homerdash1.png','homerdash2.png'
      ],
      tags: ['Python','Self-Hosted','Docker' ],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Project Github',
          color: 'dark',
          hyperlink:
            'https://github.com/dylankainth/homerdash',
        },
      ],
    },

    'e6860f76-d1c3-4e43-bcaa-d35c33ac1642': {
      title: 'When Do I Come Home',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Website', icon: 'web' },
      image: 'whendoicomehome0.png',
      longdescription: `When Do I Come Home hosted various countdown clocks towards the school holidays for various schools. \n \n It has unfortunately, been shut down.`,
      timeframedescription: 'November 2019',
      longimages: [
        'whendoicomehome1.png','whendoicomehome2.png'
      ],
      tags: ['CSS','HTML'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit Website',
          color: 'success disabled',
          hyperlink:
            'https://whendoicomehome.tk',
        },
      ],
    },

    '76400d06-4f24-41c7-a717-943f946f2b11': {
      title: 'Legend of Untitled',
      people: { status: 'Personal Project', icon: 'person' },
      type: { status: 'Web Game', icon: 'sports_esports' },
      image: 'legofuntitled0.png',
      longdescription: `I made the Legend of Untitled when I was trying to play with Phaser. \n \n Phaser is a JS library for building games in the web. \n The game is very limited as I didn't develop it further`,
      timeframedescription: 'November 2019',
      longimages: [
        'legofuntitled1.png'
      ],
      tags: ['CSS','HTML','JS','Phaser'],
      cardstyle: 'dark',
      buttons: [
        {
          text: 'Visit Website',
          color: 'success',
          hyperlink:
            'https://thelegendofuntitled.azurewebsites.net/',
        },
      ],
    },

  },
})

