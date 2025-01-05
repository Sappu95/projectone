
const navbar = () => {
    let card = ` <header id="header">


        <div class="Logo">
            <span id="name">Rashan ki dukaan</span>

            <input id="serch" type="text" placeholder="Search...">
            <button id="submit" type="submit">Search</button>

            <div class="login">
                <a href="login.html">Login</a>
            </div>
            <div class="login">
                <a href="signup.html">Signup</a>
            </div>

            <div class="cart">
                <a href="cart.html"><img
                        src="https://howtodrawforkids.com/wp-content/uploads/2022/01/how-to-draw-a-shopping-bag.jpg"
                        width="13%"></a>
            </div>

        </div>
        <div class="nav">
            <button id="sort">sort by category</button>
            <div class="catogary">
                <ul class="list">
                    <li>Pet food</li>
                    <li>child Special</li>
                    <li>grains</li>
                    <li>Vegetable</li>
                    <li>Fruits</li>
                    <li>Dairy</li>
                </ul>

            </div>
        </div>
    </header>
`;
  
      document.getElementById("nav").innerHTML = card
      
  };
  
  navbar()