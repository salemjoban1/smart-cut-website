const animationScrollObserver = new IntersectionObserver(
(entries, animationScrollObserver) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('enter');
            animationScrollObserver.unobserve(entry.target)
        }
    });
}
);
export default{
    beforeMount(el){
        el.classList.add('before-enter');
        animationScrollObserver.observe(el);
    }
}