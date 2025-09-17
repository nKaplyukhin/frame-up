import "./styles/styles.scss";

const options = {
    root: document,
    rootMargin: '0px',
    threshold: 0.5
}

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animation-block_active")
        }
    })
}

const observer = new IntersectionObserver(callback, options)

const animationsBlock = document.querySelectorAll(".animation-block")

animationsBlock.forEach(i => {
    observer.observe(i)
})
