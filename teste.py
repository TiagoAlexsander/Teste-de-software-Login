import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.alert import Alert
from webdriver_manager.chrome import ChromeDriverManager

# Inicia o navegador
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# Abre a página local
driver.get("http://127.0.0.1:5500/testeLogin/index.html")

# Preenche CPF
cpf_input = driver.find_element(By.ID, "cpf")
cpf_input.send_keys("123.456.789-00")

# Preenche Senha
senha_input = driver.find_element(By.ID, "senha")
senha_input.send_keys("senha123")

# Clica no botão de login
btn_login = driver.find_element(By.CLASS_NAME, "btn-login")
btn_login.click()

# Aguarda o alerta aparecer
time.sleep(15)
alert = Alert(driver)
print("Texto do alerta:", alert.text)
alert.accept()

# Aguarda redirecionamento (opcional)
time.sleep(5)

# Fecha o navegador
driver.quit()