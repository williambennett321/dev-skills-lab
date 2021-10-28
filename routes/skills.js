
import { Router } from "express"
import * as skillsCtrl from "../controllers/skills.js"
import * as skillsDb from "../data/skills-db.js"
const router = Router()


router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.newSkill);
router.get("/:id", skillsCtrl.show);

router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.deleteSkill);


export {
  router
}