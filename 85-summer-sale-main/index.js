
function getNumberValue(idName) {
    const elementField = document.getElementById(idName);
    const elementValueString = elementField.innerText;
    const element = parseFloat(elementValueString);
    return element;
  }
  
  function setValue(idName, value) {
    const element = document.getElementById(idName);
    element.innerText = value;
  }
  
  function getTitle(IdTitle) {
    const titleField = document.getElementById(IdTitle);
    const title = titleField.innerText;
    return title;
  }
  
  
  document.getElementById("SELL-BUTTON").addEventListener("click", function () {
    const cuponInputField = document.getElementById("input-cpn");
    cuponInputField.value = "SELL200";
  });
  
  //  Dynamic section
  function dynamicLog(IdTitle, priceId) {
    const dynamicTextField = document.getElementById("dynamic-text-add");
    const count = dynamicTextField.childElementCount;
  
    const p = document.createElement("p");
    p.innerHTML = `${count + 1}. ${IdTitle}  ${priceId} TK`;
    dynamicTextField.appendChild(p);
  }
  function calculation(IdTitle, priceId) {
    const totalPrice = getNumberValue("total-price");
    const price = getNumberValue(priceId);
    const title = getTitle(IdTitle);
    const total = totalPrice + price;
    const newTotal = total.toFixed(2);
  
    setValue("total-price", newTotal);
  
    const makePurchasBtn = document.getElementById("MAKE-PURCHASE-BUTTON");
    const applyBtn = document.getElementById("apply-button");
  
    if (newTotal > 0) {
      makePurchasBtn.setAttribute("enabled", "");
      makePurchasBtn.removeAttribute("disabled");
    }
    if (newTotal >= 200) {
      applyBtn.setAttribute("enabled", "");
      applyBtn.removeAttribute("disabled");
    }
  
    dynamicLog(title, price);
  }
  

  
  // button 
  document.getElementById("home-button").addEventListener("click", function () {
    setValue("total-price", "00");
    setValue("discount", "00");
    setValue("total-final", "00");
    const makePurchasBtn = document.getElementById("MAKE-PURCHASE-BUTTON");
    const applyBtn = document.getElementById("apply-button");
    makePurchasBtn.removeAttribute("enabled");
    applyBtn.removeAttribute("enabled");
    makePurchasBtn.setAttribute("disabled", "");
    applyBtn.setAttribute("disabled", "");
  
    const dynamicTextField = document.getElementById("dynamic-text-add");
    dynamicTextField.innerHTML = "";
  });








    // calculation 
    function calculateDiscount() {
      const cuponInputField = document.getElementById("input-cpn");
      const cuponInputValue = cuponInputField.value;
    
      if (cuponInputValue === "SELL200") {
        const totalPrice = getNumberValue("total-price");
    
        const discount = totalPrice * (20 / 100);
        const fixedDiscount = discount.toFixed(2);
        setValue("discount", fixedDiscount);
    
        const newTotalFinal = totalPrice - discount;
        const fixedNewTotalFinal = newTotalFinal.toFixed(2);
        setValue("total-final", fixedNewTotalFinal);
        cuponInputField.value = "";
      } else {
        alert("Please Enter a valid cupon Code");
      }
    }