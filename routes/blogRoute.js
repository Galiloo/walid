const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllblogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
} = require("../controller/blogCtrl");
const { uploadImages } = require("../controller/blogCtrl");

const router = express.Router();
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadimages");
router.post("/", authMiddleware, isAdmin, createBlog);

router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);

router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllblogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
