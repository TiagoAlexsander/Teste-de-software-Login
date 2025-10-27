import unittest

# Função que simula a verificação de login
def verificar_login(cpf, senha):
    return cpf == "123.456.789-00" and senha == "senha123"

class TestLogin(unittest.TestCase):

    def test_login_valido(self):
        self.assertTrue(verificar_login("123.456.789-00", "senha123"))

    def test_login_cpf_invalido(self):
        self.assertFalse(verificar_login("000.000.000-00", "senha123"))

    def test_login_senha_invalida(self):
        self.assertFalse(verificar_login("123.456.789-00", "senhaErrada"))

    def test_login_ambos_invalidos(self):
        self.assertFalse(verificar_login("000.000.000-00", "senhaErrada"))

if __name__ == "__main__":
    unittest.main()