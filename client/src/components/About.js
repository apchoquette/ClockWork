import React from 'react'

const About = () => {

    const aboutStyle = {
        width: "75%",
        position: "relative",
        top: "200px",
        padding: "20px",
        boxShadow: "0px 1px 2px lightgray"
    }
    return (
        <div className="container bg-light" style={aboutStyle}>
            <div>
                <h3>About ClockWork</h3>
            </div>
            <div>
                <p>
                    ClockWork is a simple task-tracking tool to help you get through your workday. Categorizing your varied tasks into <strong>flows </strong>
                  gives you permission to forget. Daily reminders and a task summary will keep you on top of absolutely everything.
                </p>
                <p>
                    Start by creating a <strong>flow</strong> from the left pane, and build from there. As your tasks change status, use the arrows on your task 
                    to move the task along in your flow, until the flow is marked as complete. The tasks will count down until they're past due, then they'll turn red to signify their past-due status.
                </p>
            </div>

        </div>
    )
}

export default About;