let btn = document.getElementById('menu-btn');
btn.onclick=()=>{
    document.getElementById('nav-menu-mobile').style.display='flex';
}
document.getElementById('menu-close-btn').onclick=()=>{
    document.getElementById('nav-menu-mobile').style.display='none';
}
function showDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
}

function hideDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
}
// Sample reviews data
const reviewsData = [
    { title: "Transformative Courses", content: "I can't express how grateful I am for the incredible learning experience provided by this educational platform. The courses are not just informative; they are transformative! The content is well-structured, engaging, and presented in a way that makes complex concepts easy to understand. The interactive elements and practical exercises have significantly enhanced my understanding. Kudos to the educators for their dedication and expertise!", rating: 5 },
    { title: "A Goldmine of Knowledge", content: "Enrolling in courses here was one of the best decisions I've made for my education. The content is exceptional, and the instructors are experts in their fields. The lessons are not only informative but also delivered with enthusiasm and clarity. The platform's user-friendly interface makes navigation a breeze. I highly recommend this to anyone seeking a goldmine of knowledge!", rating: 4 }
    // Add more reviews as needed
];

// Function to generate HTML for a review
function generateReviewHTML(review) {
    console.log(review)
    return `
        <div class="review">
            <h3>${review.title}</h3>
            <p>${review.content}</p>
            <p class="rating">Rating: ${review.rating}/5 Stars</p>
        </div>
    `;
}

// Function to render reviews on the page
function renderReviews() {
    const reviewContainer = document.getElementById("reviewContainer");
    reviewContainer.innerHTML = "";
    reviewsData.forEach(review => {
        const reviewHTML = generateReviewHTML(review);
        reviewContainer.innerHTML += reviewHTML;
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("reviewTitle").value;
    const content = document.getElementById("reviewContent").value;
    const rating = document.getElementById("reviewRating").valueAsNumber;

    // Add the new review to the data
    reviewsData.push({ title, content, rating });

    // Render the updated reviews
    renderReviews();

    // Clear the form
    event.target.reset();
}

// Add event listener for form submission
document.getElementById("submitReviewForm").addEventListener("submit", handleSubmit);

// Initial rendering of reviews
renderReviews();