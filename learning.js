class Problem{
	
	constructor(title, text, eq, answ, feedback ){
		this.title = title;
		this.text = text;
		this.eq = eq;
		this.answ = answ;
		this.feedback = feedback;
	}

	generateSlide( markdown=true ){
		
		return `
		<section data-markdown>
			<textarea data-template>
				###	 this.title
				###### this.text
				
				\` this.eq \`
				
				<form onsubmit="this.submitAnswer(1);"; return false;" action="#" >
					<input class="input" type="text" name="text">
					<input type="submit" name="submit">
				</form>

			</textarea>

		</section>
		`;

	}

	appendSlide(){
		document.getElementsByClassName('slides').innerHTML += this.generateSlide() ;
	}

	submitAnswer( answ ){

		if( this.answ === answ ){
			return true;
		}else{
			return false;
		}
	}

}


class Feedback{

	constructor( type, cond, text, callback=null){
		this.type = type;
		this.cond = cond;
		this.text = text;
		this.callback = callback;
	}

	get(){
		return true;
	}
}




