var ComponentProfileContentAbout = React.createClass({
    render() {
        return (
            <div className="content">
                {this.props.model.basics.summary}
                <ul className="highlights">
                    {this.props.model.basics.highlights.map(function(o,i){
                        return (
                            <li key={i}>{o}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
});

var ComponentProfileContentWorkExperience = React.createClass({
    render() {
        return (
            <ul className="list-unstyled">
                <li className="card card-nested clearfix">
                    <div className="content">
                        <p className="clear-margin relative">
                            <strong>Frontend Engineer</strong>,&nbsp;
                            <a href="http://euclidanalytics.com"  target="_blank">Euclid Analytics</a>
                        </p>
                        <p className="text-muted">
                            <small>
                                <span className="space-right">Aug 2015 - present</span>
                                <span><i className="fa fa-clock-o icon-left"></i>
                                <span id="currentyears">0</span> years <span id="currentmonths">1</span> months</span>
                            </small>
                        </p>
                        <p>Data Visualization</p>
                        <ul>
                            <li> Created/maintained a web/mobile application for the largest sensor network in the world </li>
                            <li> Stack compromised of BackboneJS, MarionetteJS, Ruby On Rails, and MySQL </li>
                            <li> Test driven development with JasmineJS is used in lieu of QA team </li>
                        </ul>
                    </div>
                </li>
            </ul>
        )
    }
});

var ComponentProfileContentEducation = React.createClass({
    render() {
        var education = this.props.model.education[0],
        startDate = moment(education.startDate).format("MMM YYYY"),
        endDate = moment(education.endDate).format("MMM YYYY"),
        attended = startDate + " - " + endDate;

        return (
            <div className="content">
                <ul className="list-unstyled">
                    <li className="card card-nested">
                        <div className="content">
                            <p className="clear-margin relative">
                                <strong>{education.area}, {education.studyType}</strong>, {education.institution}
                            </p>
                            <p className="text-muted">
                                <small>{attended}</small>
                            </p>
                            <i></i>
                            <div className="space-top labels"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
});

var ComponentProfileContentDetails = React.createClass({
    render() {
        console.log(this.props.model)
        return (
            <div className="background-details">
                {this.props.content.map((block,i) => {
                    var fonticon = "fa fa-lg fa-" + block.font;
                    return (
                        <div className="detail" id={block.section} key={i}>
                            <div className="icon">
                                <i className={fonticon}></i>
                                <span className="mobile-title">{block.section}</span>
                            </div>
                            <div className="info">
                                <h4 className="title text-uppercase">{block.section}</h4>
                                {(() => {
                                    if (block.section === "about"){
                                        return (
                                            <ComponentProfileContentAbout model={this.props.model} />
                                        )
                                    } else if (block.section === "work-experience") {
                                        return (
                                            <ComponentProfileContentWorkExperience model={this.props.model} />
                                        )
                                    } else if (block.section === "skills") {
                                        return (
                                            <div></div>
                                        )
                                    } else if (block.section === "education") {
                                        return (
                                            <ComponentProfileContentEducation model={this.props.model} />
                                        )
                                    } else if (block.section === "interests") {
                                        return (
                                            <div></div>
                                        )
                                    } else {
                                        // do nothing
                                    }
                                })()}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
});

var ComponentProfileContent = React.createClass({
    render() {
        return (
            <div className="card background-card">
                <h4 className="text-uppercase text-bolder">Background</h4>
                <hr/>
                <ComponentProfileContentDetails model={this.props.model} content={this.props.section}/>
            </div>
        )
    }
});

ReactDOM.render (
     <ComponentProfileContent model={oResume} section={modelContentSection} />,
     $('.content-card-wrapper').get(0)
);
