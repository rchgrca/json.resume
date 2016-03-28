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
                {this.props.model.work.map(function(o,i){
                    var datesworked   = moment(o.startDate).format("MMM YYYY") + " - " + moment(o.endDate).format("MMM YYYY"),
                           duration   = o.duration,
                    durationformatted = duration[0] + ", " + duration[1];

                    return (
                        <li className="card card-nested clearfix" key={i}>
                            <div className="content">
                                <p className="clear-margin relative">
                                    <strong>{o.position}</strong>,&nbsp;
                                    <a href={o.website} target="_blank">{o.company}</a>
                                </p>
                                <p className="text-muted">
                                    <small>
                                        <span className="space-right">{datesworked}</span>
                                        <span><i className="fa fa-clock-o icon-left"></i><span className="duration">{duration}</span></span>
                                    </small>
                                </p>
                                <p>{o.summary}</p>
                                <ul>
                                    {o.highlights.map(function(o,i){
                                        return (
                                            <li key={i}>{o}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
});

var ComponentProfileContentSkills = React.createClass({
    render() {
        return (
            <div className="content">
                <ul className="list-unstyled">
                    {this.props.model.skills.map(function(o,i){
                        var tooltip = "Skills: " + o.name;
                        return (
                            <li className="card card-nested card-skills" key={i}>
                                <div className="skill-level" rel="tooltip" title={tooltip} data-placement="right">
                                    <div className="skill-progress master"></div>
                                </div>
                                <div className="skill-info">
                                    <strong>{o.name}</strong>
                                    <div className="space-top labels">
                                        <span className="label label-keyword">{o.keywords[0]}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
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

var ComponentProfileContentInterests = React.createClass({
    render() {
        return (
            <div className="content">
                <ul className="list-unstyled">
                    {this.props.model.interests.map(function(o,i){
                        return (
                            <li className="card card-nested" key={i}>
                                <p><strong><a href={o.href} target="_blank">{o.name}</a></strong></p>
                                <div className="space-top labels"></div>
                            </li>
                        )
                    })}
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
                                            <ComponentProfileContentSkills model={this.props.model} />
                                        )
                                    } else if (block.section === "education") {
                                        return (
                                            <ComponentProfileContentEducation model={this.props.model} />
                                        )
                                    } else if (block.section === "interests") {
                                        return (
                                            <ComponentProfileContentInterests model={this.props.model} />
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
