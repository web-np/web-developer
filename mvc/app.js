// Define Model
const model = {
    pages: {
        home: {
            title: 'Home',
            content: '<h1>Welcome to my website!</h1>'
        },
        about: {
            title: 'About',
            content: '<h1>About me</h1><p>I am a web developer.</p>'
        },
        contact: {
            title: 'Contact',
            content: '<h1>Contact me</h1><p>Email: john@example.com</p>'
        }
    }
};

// Define View
const view = {
    renderPage: function(page) {
        const contentElement = document.getElementById('content');
        contentElement.innerHTML = page.content;
        document.title = page.title;
    }
};

// Define Controller
const controller = {
    navigateToPage: function(pageName) {
        const page = model.pages[pageName];
        view.renderPage(page);
        window.location.hash = pageName;
    },
    init: function() {
        const hash = window.location.hash.substr(1);
        if (hash) {
            controller.navigateToPage(hash);
        } else {
            controller.navigateToPage('home');
        }

        window.addEventListener('hashchange', function() {
            const hash = window.location.hash.substr(1);
            controller.navigateToPage(hash);
        });
    }
};

// Initialize the application
controller.init();
