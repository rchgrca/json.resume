
var ComponentProfilePic = React.createClass({
    render() {
        return (
            <div>
                <span className="profile-pic-container">
                    <div className="profile-pic">
                        <img className="media-object img-circle center-block"  data-src="holder.js/100x100"
                            alt={this.props.model.basics.name} src={this.props.model.basics.picture}/>
                    </div>
                    <div className="name-and-profession">
                        <h3 className="text-center text-bolder name">{this.props.model.basics.name}</h3>
                        <h5 className="text-muted text-center">{this.props.model.basics.label}</h5>
                    </div>
                </span>
                <hr/>
            </div>
        )
    }
});

var ComponentProfileContact = React.createClass({
    render() {
        var modelProfileContact = [
            {icon: "location-arrow", detail: this.props.model.basics.location.city + ", " + this.props.model.basics.location.region + ", " + this.props.model.basics.location.countryCode, href:false},
            {icon: "phone", detail: "Phone", href:"tel:" + this.props.model.basics.phone},
            {icon: "envelope", detail: "E-mail", href:"mailto:" + this.props.model.basics.email},
            {icon: "link", detail: this.props.model.basics.website, href:this.props.model.basics.website},
            {icon: "language", detail: this.props.model.languages[0].language, href:false}
        ];
        return (
            <div className="contact-details clearfix" id="contact">
                {modelProfileContact.map(function(o,i) {
                    var fonticon = "fa fa-lg fa-" + o.icon;
                    return (
                        <div className="detail" key={i}>
                            <span className="icon"><i className={fonticon}></i></span>
                            <span className="info">
                            {(() => {
                                if (o.href){
                                    return <a href={o.href} target="_blank">{o.detail}</a>
                                } else {
                                    return o.detail
                                }
                            })()}

                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }
});

var ComponentProfileSocialLinks = React.createClass({
    render() {
        return (
            <div>
                <hr/>
                <div className="social-links text-center">
                    <a className="fa fa-linkedin fa-2x social-link link-linkedin"
                        href={this.props.model.basics.profiles[0].url} target="_blank"></a>
                </div>
            </div>
        )
    }
});

var ComponentProfileCard = React.createClass({
    render() {
        return (
            <div className="card profile-card">
                <ComponentProfilePic model={this.props.model} />
                <ComponentProfileContact model={this.props.model} />
                <ComponentProfileSocialLinks model={this.props.model} />
            </div>
        )
    }
});

ReactDOM.render (
     <ComponentProfileCard model={oResume} />,
     $('.profile-card-wrapper').get(0)
);
