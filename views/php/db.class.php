<?php
	class Db
	{
		private $m_sHost = "localhost";
		private $m_sUser = "root";
		private $m_sPassword = "root";
		private $m_sDatabase = "jurgbcmstest";
		public $conn;


		public function __construct()
		{
			$this->conn = new mysqli($this->m_sHost, $this->m_sUser, $this->m_sPassword, $this->m_sDatabase);
		}
	}
?>