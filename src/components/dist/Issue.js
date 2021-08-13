"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var CommentList_1 = require("./CommentList");
var commentrepo_1 = require("../repos/github/commentrepo");
var IssueCard = function (props) {
    return React.createElement(react_bootstrap_1.Card, { style: { marginBottom: "1em" } },
        React.createElement(react_bootstrap_1.Card.Body, null,
            React.createElement(react_bootstrap_1.Card.Title, null, props.issue.title),
            React.createElement(react_bootstrap_1.Card.Text, null, props.issue.body)),
        React.createElement(react_bootstrap_1.Card.Footer, null,
            React.createElement(CommentList_1["default"], { issueId: props.issue.id, repo: new commentrepo_1.GithubComentRepo(String(localStorage.getItem("github_access_token"))) })));
};
exports["default"] = IssueCard;
