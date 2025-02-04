const userDAO = require("../responsitory/userDAO.js");

const userController = {
  // Lấy tất cả người dùng
  async getAllUsers(req, res) {
    try {
      const users = await userDAO.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi lấy danh sách người dùng", error });
    }
  },

  // Tạo người dùng mới
  async createUser(req, res) {
    try {
      const { username, email, password, role, full_name, phone_number, address } = req.body;

      if (!username || !email || !password || !role || !full_name) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin bắt buộc" });
      }

      const newUser = await userDAO.createUser({
        username,
        email,
        password,
        role,
        full_name,
        phone_number,
        address,
      });

      res.status(201).json({ message: "Tạo người dùng thành công", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi tạo người dùng", error });
    }
  },
};

module.exports = userController;
