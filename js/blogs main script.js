const blogs = [
    {
        title: "End of Drupal 7 Urgent Need to Migrate Drupal 7 Before 2025",
        description: "Staying on Drupal 7 poses significant risks that can impact security, performance, and functionality.",
        image: "images/drupal-banner-6-601x520.png",
        link: "file:///C:/Users/goliw/Downloads/new.project/single%20blog.html",
        date: "December 6, 2024"
    },
    {
        title: "Does your business need an excellent website to scale 100x?",
        description: "Having a website for your business can be highly beneficial, though whether you “need” one depends on various factors. Here are some reasons why having a website can be crucial.",
        image: "images/15431396_9020-min-601x520.jpg",
        link: "file:///C:/Users/goliw/Downloads/new.project/single%20blog.html",
        date: "October 29, 2024"
    },
    {
        title: "Basics of Dart and Flutter tutorials",
        description: "What is Dart Language? Dart is type-safe; it employs static type checking to ensure that a variable’s value always matches the static type of the variable. ",
        image: "images/Dart-Flutter-601x520.jpg",
        link: "file:///C:/Users/goliw/Downloads/new.project/single%20blog.html",
        date: "October 8, 2024"
    },
    {
        title: "How to Choose the Best Web Development Service Provider?",
        description: "In today’s digital world, Every company and business must have a website. But unfortunately, many business owners have limited knowledge of business...",
        image: "images/how we choose.jpg",
        link: "#",
        date: "July 23, 2024"
    },
    {
        title: "Website Development Service Provider",
        description: "Many business owners face issues selecting the best website development service provider for their business.",
        image: "images/Website-development.jpg",
        link: "#",
        date: "July 25, 2023"
    },
    {
        title: "What is Search Engine Optimization (SEO)?",
        description: "It’s hard to imagine that anyone who runs a company and maintains its digital infrastructure has not heard of what is search engine optimization.",
        image: "images/What is Search.jpg",
        link: "#",
        date: "November 17, 2021"
    },
    {
        title: "What is the importance of web development?",
        description: "Most business owners are unable to understand the importance of web development. But they think about how to get business online and benefit from it.",
        image: "images/What are the importance.jpg",
        link: "#",
        date: "November 17, 2021"
    },
    {
        title: "Top 6 reasons to know, why every business needs a website",
        description: "Why every business needs a website? – It is likely that every business person has the same question. We have access to all information at our fingertips.",
        image: "images/Why Every Business.jpg",
        link: "#",
        date: "November 17, 2021"
    }
];

const blogContainer = document.getElementById('blogContainer');
const pagination = document.getElementById('pagination');

let currentPage = 1;
const blogsPerPage = 3;

function displayBlogs(page) {
    blogContainer.innerHTML = "";
    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const paginatedBlogs = blogs.slice(start, end);

    paginatedBlogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4';
        card.innerHTML = `
        <article class="blog-card h-100">
        <img src="${blog.image}" alt="${blog.title}" />
        <div class="blog-card-body">
            <h5>${blog.title}</h5>
            <p>${blog.description}</p>
            <a href="${blog.link}" class="read-more">Read More »</a>
        </div>
        <div class="blog-date text-center">${blog.date}</div>
        </article>
    `;
        blogContainer.appendChild(card);
    });
}

function setupPagination() {
    const pageCount = Math.ceil(blogs.length / blogsPerPage);
    pagination.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<button class="page-link">${i}</button>`;
        li.addEventListener('click', () => {
            currentPage = i;
            displayBlogs(currentPage);
            setupPagination();
        });
        pagination.appendChild(li);
    }
}

// Initial render
displayBlogs(currentPage);
setupPagination();
