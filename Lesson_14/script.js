let parent = document.getElementById('parent');


class DomElement {
    constructor(selector, height, width, bg, fontSize) {
      this.selector = selector;
      this.height = height;
      this.width = width; 
      this.bg = bg; 
      this.fontSize = fontSize;
    }
}

DomElement.prototype.createBlock = function (){
  
  if(this.selector[0] === '.') {
    console.log('this is class');
    let newBlock = document.createElement('div');
        newBlock.classList.add('block'); 
        newBlock.textContent = 'Новый Блок Class';
        newBlock.style.cssText=`height: ${this.height};
                                width: ${this.width};
                                background: ${this.bg};
                                font-size: ${this.fontSize};
                                `;
    parent.appendChild(newBlock);
     
  } else if (this.selector[0] === '#') {
    console.log('this is id');
    let newBlock = document.createElement('div');
        newBlock.setAttribute('id', 'best'); 
        newBlock.textContent = 'Новый Блок ID';
        newBlock.style.cssText=`height: ${this.height};
                                width: ${this.width};
                                background: ${this.bg};
                                font-size: ${this.fontSize};
                                `;
    parent.appendChild(newBlock);
  }
};

let myBlock = new DomElement('#selector', '100px', '200px', '#7AF0D8', '20px');

console.log(myBlock.createBlock());



