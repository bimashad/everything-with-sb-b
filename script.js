document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});
// Smooth scrolling for "Watch Now" button
document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("videos").scrollIntoView({ behavior: "smooth" });
});
// Add hover effect for videos
document.querySelectorAll(".video").forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.style.boxShadow = "0 4px 20px rgba(255, 0, 0, 0.5)";
    });
    video.addEventListener("mouseleave", () => {
        video.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    });
});
/* JavaScript for Testimonials Hover Effect */
document.querySelectorAll(".testimonial").forEach(testimonial => {
    testimonial.addEventListener("mouseenter", () => {
        testimonial.style.boxShadow = "0 4px 20px rgba(255, 0, 0, 0.5)";
    });
    testimonial.addEventListener("mouseleave", () => {
        testimonial.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    });
});
/* JavaScript for Form Submission */
const contactForm = document.querySelector(".contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
    });
}

const authForms = document.querySelectorAll(".auth-form");
authForms.forEach(form => {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Authentication successful!");
    });
});
