//In this class we assemble all the other components
class Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div><Header/><Content content ={this.props.content}/></div>)
  }
}
//here is all the content (my image and who I am)
class Content extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="content">
      <Image/>
      <About content={this.props.content}/>
      <Footer/>
      </div>
    );
  }
}

// this class makes the image interactive
class Image extends React.Component{
  constructor(props){
    super(props);
    //state is used so that the image style is updated in real time
    this.state = {
      classname : "image"
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  onMouseEnter(){
    //when the mouse enters the class name changes causing the style to change as well
    this.setState({classname:"imageToggle"})
  }
  onMouseLeave(){
    //when the mouse leaves the class name changes back to the original
    this.setState({classname:"image"})
  }
  render(){
    if(this.props.url){
    return(<img className={this.state.classname} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} src={this.props.url}/>)
  }
  else{
    return(<img className={this.state.classname} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} src='bisector.png'/>)
  }
  }
}

//this class makes the link to my projects more interactive
class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      classname : "link"
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  onMouseEnter(){
    //when the mouse enters the class name changes causing the style to change as well
    this.setState({classname:"linkToggle"})
  }
  onMouseLeave(){
    //when the mouse leaves the class name changes back to the original
    this.setState({classname:"link"})
  }
  render(){
    return(<a href="https://github.com/generationXcode?tab=repositories" className={this.state.classname} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>My projects</a>)
  }
}

//this makes the logo more interactive
class Logo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      classname : "logo"
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  onMouseEnter(){
    //when the mouse enters the class name changes causing the style to change as well
    this.setState({classname:"logoToggle"});
  }
  onMouseLeave(){
    //when the mouse leaves the class name changes back to the original
    this.setState({classname:"logo"});
  }
  render(){
    return(<h2 className={this.state.classname} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Generationxcode</h2>)
  }
}

//this make the text I've written about myself more interactive
class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      classname : "aboutToggle"
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  onMouseEnter(){
    //when the mouse enters the class name changes causing the style to change as well
    this.setState({classname:"aboutToggle"});
  }
  onMouseLeave(){
    //when the mouse leaves the class name changes back to the original
    this.setState({classname:"aboutToggle"});
  }
  render(){
    return(
      <p className={this.state.classname} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.props.content}</p>
    )
  }
}

//this is the component for the header
class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="header"><Logo/><span className="Next_to_logo">(Generationzcode was taken)</span><Project/></div>
    );
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="footer"><p>© generationXcode 2020</p><br/>
      <UrlBox/></div>
    );
  }
}
class UrlBox extends React.Component{
    constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="UrlBox"><Bloglink linkDSC="Upcoming blogpost" linkURL="#" placing = "left"/></div>
    );
  }
}
class Bloglink extends React.Component{
  constructor(props){
    super(props);
    this.className="BloglinkRight";
  }
  render(){
    if(this.props.placing == "left"){
      this.className = "BlogLinkLeft"
    }
    //this.props.linkDSC is the word to describe the link
    //this.props.linkURL is the link itself
    return(<div className={this.className}><a href={this.props.linkURL}>{this.props.linkDSC}</a></div>)
  }
}
//here we write the code to display the web page
ReactDOM.render(<Index content="Hey! This peice of scrappy web development I spent 30 minutes on will now be my blog! Who thought of that huh? Maybe someday I'll make an lstm that will gemerate text that actually makes sense and I'll just paste it here. But until the I'll be writing tutorials on this site. I'll begin with resources for learning python"/>,document.getElementById("root"));