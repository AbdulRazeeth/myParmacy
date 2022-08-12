const template  = document.createElement('template')
template.innerHTML =`
<style>
   .tooltip-container{
       display:inline-block;
       position:relative;
   } 
   .alert-style{
       padding:5px;
       background-color:blue;
       display:flex;
       align-items:center;
       justify-content:center;
       border-radius:50%;
   }
   .cancel-style{
        padding:5px;
        background-color:blue;
        display:none;
        align-items:center;
        justify-content:center;
        border-radius:50%;
   }
   .notify-container{
       position:absolute;
       z-index:9;
       width:300px;
       background:white;
       box-shadow:5px 5px 10px rgba(0,0,0,0.1);
       padding:15px;
       bottom:100%;
       left:100%;
       font-size:14px;
       transform:scale(0);
       transform-origin:bottom left;
       transition:transform .5s cubic-bezier(0.61, 1, 0.88, 1);
       border-radius:5px;
   }
</style>


        <div class='tooltip-container'>
        <svg xmlns="http://www.w3.org/2000/svg" width='48' height='48' class = 'alert-style'><path d="M22.5 29V10h3v19Zm0 9v-3h3v3Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" class='cancel-style'><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
        <div class='notify-container'>
            <slot name = 'message' />
        </div>
        </div
`



class popupNotify extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    customToolTip(value){
        const toolTip = this.shadowRoot.querySelector('.notify-container')
        const alert = this.shadowRoot.querySelector('.alert-style')
        const cancel = this.shadowRoot.querySelector('.cancel-style')
        if(value === true){
            toolTip.style.transform = "scale(1)"
            alert.style.display = "none"
            cancel.style.display='flex'
        }else{
            toolTip.style.transform = "scale(0)"
            cancel.style.display = "none"
            alert.style.display='flex'
        }
    }
    connectedCallback(){
        this.shadowRoot.querySelector('.alert-style').addEventListener('click',()=>{
            this.customToolTip(true)
        })
        this.shadowRoot.querySelector('.cancel-style').addEventListener('click',()=>{
            this.customToolTip(false)
        })
        if(this.getAttribute('tip-background')){
            this.shadowRoot.querySelector('.notify-container').style.background = this.getAttribute('tip-background')
        }
        if(this.getAttribute('tip-color')){
            this.shadowRoot.querySelector('.notify-container').style.color = this.getAttribute('tip-color')
        }
    }
}
window.customElements.define('pop-up-notify',popupNotify)