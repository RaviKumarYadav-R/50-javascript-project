window.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const progressBar = document.getElementById("progress-bar");
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = scrollPercentage + "%";
});
