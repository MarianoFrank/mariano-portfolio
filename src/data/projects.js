const projects = [
    {
        id: 'devjobs',
        name: 'DevJobs',
        colors: {
            light: 'rgba(255, 0, 0, 0.5)',
            dark: 'rgba(255, 0, 0, 0.1)'
        },
        resume: 'Plataforma de e-commerce, experiencia de compra intuitiva y diseño elegante.',
        introduction: 'Lorem ipsum <strong>dolor</strong>  sit amet, consectetur adipiscing elit. Aliquam sed lorem at metus finibus molestie. Nullam ullamcorper varius aliquet. Duis et ornare metus. Fusce urna erat, pretium nec vestibulum sagittis, finibus in nulla. Mauris blandit tincidunt tempus. Mauris euismod est in ullamcorper lacinia. Donec auctor felis augue, ac aliquam enim feugiat id. Nulla vestibulum, nunc id condimentum sodales, neque nisi vehicula urna, eget semper urna sapien in risus. ',
        content: [
            {
                images: ['1', '2'],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lorem at met',
                miniature: true
            },
            {
                images: ['2'],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lorem at met'
            }
        ],
        technologies: [
            {
                name: 'React',
                icon: 'fab fa-react',
                color: '#61DAFB',
                description: 'Used for the frontend'
            },
            {
                name: 'Node.js',
                icon: 'fab fa-node-js',
                color: '#339933',
                description: 'Used for the backend'
            },
            {
                name: 'JavaScript',
                icon: 'fab fa-js',
                color: '#F7DF1E'
            },
            {
                name: 'HTML5',
                icon: 'fab fa-html5',
                color: '#E34F26',
                description: 'Used for the markup'
            },
            {
                name: 'CSS3',
                icon: 'fab fa-css3-alt',
                color: '#1572B6'
            },
            {
                name: 'PHP',
                icon: 'fab fa-php',
                color: '#777BB4',
                description: 'Used for the backend'
            },
            {
                name: 'GitHub',
                icon: 'fab fa-github',
                color: '#171515'
            }
        ],
        github: 'https://github.com',
    },
    {
        id: 'devstagram',
        name: 'Devstagram',
        colors: {
            light: 'rgba(255, 235, 0, 0.5)',
            dark: 'rgba(255, 235, 0, 0.1)'
        },
        resume: 'Plataforma de e-commerce, experiencia de compra intuitiva y diseño elegante.',
        introduction: `
        <p>Desvstagram es una plataforma social interactiva, inspirada en Instagram, desarrollada con Laravel y Blade. Diseñada para fomentar la conexión y el intercambio visual, esta aplicación permite a los usuarios:</p>
        <ul class="w-full grid grid-cols-1 gap-4 list-disc  pl-8  mb-5 md:w-auto md:mb-0">
            <li><strong>Publicar fotos:</strong> Subir imágenes para compartir momentos con la comunidad.</li>
            <li><strong>Interacción social:</strong> Seguir a otros usuarios, dar "like" a publicaciones y comentar.</li>
            <li><strong>Feed personalizado:</strong> En la página principal, se muestran las publicaciones de las personas que sigues.</li>
            <li><strong>Búsqueda de usuarios:</strong> Una funcionalidad para encontrar y conectar con otros perfiles.</li>
            <li><strong>Cuentas personalizables:</strong> Los usuarios pueden configurar su perfil con una foto personalizada y su nombre.</li>
            <li><strong>Sistema de autenticación robusto:</strong> Incluye funcionalidades de registro, inicio de sesión y validaciones exhaustivas para garantizar la seguridad y la experiencia del usuario.</li>
        </ul>
        `,
        content: [
            {
                images: ['1'],
                text: 'This is an image description',
                miniature: true
            },
            {

                text: 'This is an image description',

            }
        ],
        technologies: [
            {
                name: 'Laravel',
                icon: 'laravel',
                description: 'Used for the backend'
            },
            {
                name: 'Livewire',
                icon: 'livewire'
            }
        ],
        github: 'https://github.com',
    }
];

export default projects;