
<script>
    let menuIsOpen = false;

    function openMenu(){
        menuIsOpen = true;
    }

    function closeMenu(){
        menuIsOpen = false;
    }

</script>

<div class="page">
    <div class="homepage-bg-fill">
        <h1>I'm ruthie</h1>    
        <img class="mobile-menu-icon-white" src="/photos/icons/white menu icon.png" on:click={openMenu}/>

        <p>
            a designer whose attention to detail motivates self-improvement & excellence in my work. 
            I find value in new ideas and thoughtful critiques;    
        </p>  
    </div>

    <div class="menu" class:open={menuIsOpen}>
        <img class="menu-logo" src="photos/mobile/menu/purple_logo.png"/>
        <div class="nav-items">
            <a href="/home">home</a>
            <button>design</button> 
                <div class="sub-navigation"> 
                    <a href="/design/magnolia">Magnolia</a>
                    <a href="/design/magnolia-network">Magnolia Network</a>
                    <a href="/design/adrian-michael-design-build">Adrian Michael Design Build</a>
                    <a href="/design/vindagua-magazine">Vindagua Magazine</a>
                    <a href="/design/paige-severance">Paige Severance</a>
                    <a href="/design/alchemist-book-cover">Alchemist book cover</a>
                    <a href="/design/the-yaqar-project">The Yaqar Project</a>
                    <a href="/design/third-creek-coffee">Third Creek Coffee</a>
                    <a href="/design/corey-low-interiors">Corey Low interiors</a>
                </div>
            <button>photo</button>
            <button>painting</button>
            <a href="/ruthie">Ruthie</a>
        </div>
        <div class="menu-footer">
            <div class="menu-footer-text">
                texas, tennessee & beyond
            </div>
            <img class="menu-footer-icon" src="photos/mobile/menu/x icon.png" on:click={closeMenu}/>
        </div>
    </div>
    
</div>


<!-- <script src="index.js"></script> -->


<style>

body {
    background-color: #E4EBFF;
}

.page {
    position: relative;
    overflow: hidden;
}
h1 {
    font-family: meno-banner, serif;
    font-weight: 300;
    font-style: italic;
}

p {    
    font-family: filson-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 6rem;
}

.homepage-bg-fill {
    background-image: url("/photos/mobile/home/gradient.JPG");
    width: 100vw;
    background-size: cover;
    height: 100vh;
    box-sizing: border-box;
    padding: 7rem;
    padding-top: 20rem;
    position: relative;
}

.homepage-bg-fill p {
    color: #ffffff;
    font-size: 2.5rem;
    line-height: 5rem;
}

.homepage-bg-fill h1 {
    color: #ffffff;
    font-size: 7rem;
    transform: skewX(-19deg);
    /* correcting alignment from SkewX distortion */
    left: 1rem;
    margin: 0;
    position: relative;
}
.mobile-menu-icon-white {
    width: 5rem;
    height: 4rem;
    position: absolute;
    top: 0;
    right: 0;
    padding: 4rem;
    
}

.menu {
    width: 100vw;
    height: 100vh;
    background: #E4EBFF;
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    left: 100vw;
    transition: left .5s;
}
.menu.open {
    left: 0;
}

.menu-logo {
    width: 100%;
    padding: 3rem 12rem;
    box-sizing: border-box;
    border-bottom: 1px solid #0014A3;
}
.nav-items {
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
    overflow-y: scroll;
    padding-top: 25rem;
}

.nav-items a, .nav-items button{
    margin: 4rem;
    background: none;
    border: none;
    font-family: Filson Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #0014A3;
    text-align: center;
    text-decoration: none; 
}

.sub-navigation {
    display: flex;
    flex-direction: column;
}

.sub-navigation a {
    font-size: 1.25rem;
    margin: 2rem;
}

.menu-footer {
    padding: 3rem 4rem;
    border-top: 1px solid #0014A3;
    display: flex;
    justify-content: space-between;
}

.menu-footer-icon {
    width: 5rem;
    height: 5rem;
}

.menu-footer-text{
    font-family: meno-banner, serif;
    font-weight: 300;
    font-style: italic;
    font-size: 3.5rem;
    transform: skewX(-17deg);
    color: #0014A3;
    padding-top: .5rem;
}

</style>

