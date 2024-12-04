import React from 'react'


  
  const skills= [
    {
      name: 'HTML',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
    },
    {
      name: 'CSS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    },
    {
      name: 'Javascript',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      name: 'Tailwind',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s',
    },
    {
      name: 'Figma',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png',
    },
    {
      name: 'Git',
      icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    },
    {
      name: 'Postman',
      icon: 'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8',
    },
    {
      name: 'Node.js',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png',
    },
    {
      name: 'MySQL',
      icon: 'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg',
    },
    {
      name: 'Prisma',
      icon: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
    },
  ];
  
  const Skills = () => {
    return (
      <div className="min-h-screen bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-4">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 text-center">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className='mt-10 w-[85%] mx-auto '/>
      </div>
    );
  };
  
  export default Skills;
  