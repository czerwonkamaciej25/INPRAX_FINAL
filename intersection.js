// const cards = document.querySelectorAll(".card")

// const observer = new IntersectionObserver(entries => {
//     console.log(entries)
//   })

// observer.observe(charts-content[0])

const observer =  new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
        threshold:23,
    }
)
cards.forEach(card => {
    observer.observe(card)
})