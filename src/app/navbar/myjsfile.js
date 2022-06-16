const creatNav = ()=>{
    let nav = document.querySelector('.navvar');
    nav.innerHTML = `
    <div class="nav">
          <img src="../../assets/images/logo.png" class="brand-logo" alt="" />
          <div class="nav-items">
            <div class="search">
              <input type="text" class="search-box" placeholder="search product"/>
              <button class="search-btn">search</button>
            </div>
            <a href=""> <i class="ti ti-user"></i></a>
            <a href=""> <i class="ti ti-bag"></i></a>
          </div>
        </div>
  
    `;
      
  }
  
  creatNav();