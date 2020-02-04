




class Problem{

    constructor(){
        this.title;
        this.subTitle;
        this.markdown;
        this.subText;
        this.equation;
        this.layout;

        this.setMarkdown();
    }

    /**
     * Returns the the problem's HTML for a reveal.js slide.
     */
    generateHTML(){
        return this.markdown;
    }

    generateHTMLNode(){
        let node = document.createElement("SECTION");
        //let att = document.createAttribute("data-markdown");
        //node.setAttributeNode(att);
        node.innerHTML = this.generateHTML();
        return node;
    }

    draw(){
        let rev = document.getElementById('slides');
        let app = rev.appendChild( this.generateHTMLNode() );
        //let rev = document.getElementById('slides');//.innerHTML += this.generateHTML() ;
        //MathJax.Hub.Queue(["Typeset",MathJax.Hub,app]);
        MathJax.Hub.Typeset();
        console.log(rev);
    }

    setMarkdown(){

        this.markdown = `<section data-markdown>
        <textarea data-template>
            ###	 Sample Problem #1
            ###### This is a sample problem. Here would be the text for it. Imagine this is detailed text that is helping set the scene for a problem you are solving.
            
            $$ \left( 1.5 \times 10^3 \right) \cdot \left( 4 \times 10^{-9} \right) = \; ? $$

            * select choice a -> do what?
            * slect chooixe x, do what?
            * answer f(n), do what?
            * feedback per answer
            * link to lessons

        </textarea>
    </section>`;
        console.log(this.markdown);
    }

}