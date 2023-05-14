const Invite = require("../models/invite");

const InvitesController = ({
  Create: (req, res, next) => {
    const invite = new Invite(req.body);
    invite.save((err, invite) => {
      if (err) {
        res.status(500).json({ messgage: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", invite: invite });
      }
    })
  },
  List: (req, res, next) => {
    Invite.find({}, (err, invites) => {
      if (err) {
        res.status(400).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", invites: invites });
      }
    })
  },
  Delete: (req, res, next) => {
    const { inviteToDeleteId } = req.body;
    Invite.findOneAndDelete({ _id: inviteToDeleteId }, (err, invite) => {
      if (err) {
        res.status(500).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", invite: invite });
      }
    })
  }
})

module.exports = InvitesController;