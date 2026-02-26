import { useRef } from 'react';
import { sanitize } from '../services/utils';
import { submitFormData } from '../services/formService';

/**
 * validateField — same logic as original form.js
 */
function validateField(field) {
  const errorEl = document.getElementById(`${field.id}-error`);
  let isValid = true;
  if (field.required && !field.value.trim()) isValid = false;
  if (field.type === 'email' && field.value.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailPattern.test(field.value.trim());
  }
  if (isValid) {
    field.classList.remove('error');
    if (errorEl) errorEl.classList.remove('visible');
  } else {
    field.classList.add('error');
    if (errorEl) errorEl.classList.add('visible');
  }
  return isValid;
}

export default function ContatoPage() {
  const formRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitLoading = document.getElementById('submitLoading');
    const successEl = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');

    const honeypot = form.querySelector('[name="website"]');
    if (honeypot && honeypot.value) return;

    const requiredFields = form.querySelectorAll('[required]');
    let allValid = true;
    requiredFields.forEach((field) => {
      if (!validateField(field)) allValid = false;
    });
    if (!allValid) {
      const firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
      return;
    }

    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoading.style.display = 'inline-flex';
    successEl.classList.remove('visible');
    errorEl.classList.remove('visible');

    const formData = {
      nome: sanitize(form.nome.value.trim()),
      empresa: sanitize(form.empresa.value.trim()),
      email: sanitize(form.email.value.trim()),
      telefone: sanitize(form.telefone.value.trim()),
      servico: form.servico.value,
      porte: form.porte.value,
      mensagem: sanitize(form.mensagem.value.trim()),
    };

    submitFormData(formData)
      .then(() => {
        successEl.classList.add('visible');
        form.reset();
        form.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
        form.querySelectorAll('.form-error.visible').forEach((el) => el.classList.remove('visible'));
      })
      .catch(() => {
        errorEl.classList.add('visible');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitText.style.display = 'inline-flex';
        submitLoading.style.display = 'none';
      });
  }

  function handleBlur(e) {
    validateField(e.target);
  }

  function handleInput(e) {
    if (e.target.classList.contains('error')) validateField(e.target);
  }

  return (
    <>
      <header className="page-header">
        <div className="container page-header__content">
          <span className="section-label section-label--light">Fale Connosco</span>
          <h1 className="page-header__title">Solicitar Orçamento</h1>
          <p className="page-header__subtitle">Descreva o seu projeto e receba uma proposta detalhada. Atendemos desde grandes complexos industriais até projetos menores com o mesmo rigor técnico.</p>
        </div>
      </header>

      <main>
        <section className="section" aria-labelledby="form-heading">
          <div className="container">
            <div className="contact-layout">
              <div className="reveal">
                <h2 id="form-heading" className="sr-only">Formulário de Contato</h2>
                <form id="contactForm" ref={formRef} noValidate onSubmit={handleFormSubmit}>
                  <div className="form-honey" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nome">Nome Completo <span className="required">*</span></label>
                      <input type="text" id="nome" name="nome" className="form-input" placeholder="O seu nome" required autoComplete="name" aria-required="true" onBlur={handleBlur} onInput={handleInput} />
                      <div className="form-error" id="nome-error" role="alert">Por favor, insira o seu nome.</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="empresa">Empresa</label>
                      <input type="text" id="empresa" name="empresa" className="form-input" placeholder="Nome da empresa" autoComplete="organization" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">E-mail <span className="required">*</span></label>
                      <input type="email" id="email" name="email" className="form-input" placeholder="email@exemplo.com" required autoComplete="email" aria-required="true" onBlur={handleBlur} onInput={handleInput} />
                      <div className="form-error" id="email-error" role="alert">Por favor, insira um e-mail válido.</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefone">Telefone</label>
                      <input type="tel" id="telefone" name="telefone" className="form-input" placeholder="+351 000 000 000" autoComplete="tel" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="servico">Tipo de Serviço <span className="required">*</span></label>
                      <select id="servico" name="servico" className="form-select" required aria-required="true" onBlur={handleBlur} onInput={handleInput}>
                        <option value="">Selecione o serviço</option>
                        <option value="fabricacao">Fabricação Metálica</option>
                        <option value="projetos">Projetos de Engenharia</option>
                        <option value="montagem">Montagem Industrial</option>
                        <option value="manutencao">Manutenção & Upgrades</option>
                        <option value="tratamentos">Tratamentos & Acabamentos</option>
                        <option value="complementar">Serviços Complementares</option>
                        <option value="completo">Ciclo Completo (Projeto a Entrega)</option>
                        <option value="outro">Outro</option>
                      </select>
                      <div className="form-error" id="servico-error" role="alert">Por favor, selecione um serviço.</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="porte">Dimensão da Empresa <span className="required">*</span></label>
                      <select id="porte" name="porte" className="form-select" required aria-required="true" onBlur={handleBlur} onInput={handleInput}>
                        <option value="">Selecione a dimensão</option>
                        <option value="grande">Grande empresa / Construtora</option>
                        <option value="media">Média empresa</option>
                        <option value="pequena">Pequena empresa</option>
                        <option value="particular">Particular / Individual</option>
                      </select>
                      <div className="form-error" id="porte-error" role="alert">Por favor, selecione a dimensão.</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mensagem">Mensagem <span className="required">*</span></label>
                    <textarea id="mensagem" name="mensagem" className="form-textarea" placeholder="Descreva o seu projeto, quantidades estimadas, prazos e qualquer detalhe relevante..." required aria-required="true" onBlur={handleBlur} onInput={handleInput}></textarea>
                    <div className="form-error" id="mensagem-error" role="alert">Por favor, descreva o seu projeto.</div>
                  </div>
                  <button type="submit" className="btn btn--primary btn--orcamento btn--lg btn--full-width" id="submitBtn">
                    <span id="submitText">
                      <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                      Enviar Pedido de Orçamento
                    </span>
                    <span id="submitLoading" className="form-loading-state">
                      <span className="spinner" aria-hidden="true"></span>
                      A enviar...
                    </span>
                  </button>
                  <div className="form-feedback form-feedback--success" id="formSuccess" role="alert">
                    <i className="fa-solid fa-circle-check form-feedback__icon" aria-hidden="true"></i>
                    <div>
                      <strong>Mensagem enviada com sucesso!</strong><br />
                      <span className="form-feedback__text">Entraremos em contato em até 24 horas úteis. Obrigado pelo seu interesse na SIMALIAN.</span>
                    </div>
                  </div>
                  <div className="form-feedback form-feedback--error" id="formError" role="alert">
                    <i className="fa-solid fa-circle-exclamation form-feedback__icon" aria-hidden="true"></i>
                    <div>
                      <strong>Erro ao enviar a mensagem.</strong><br />
                      <span className="form-feedback__text">Por favor, tente novamente ou contacte-nos diretamente pelo telefone.</span>
                    </div>
                  </div>
                </form>
              </div>
              <aside className="contact-info reveal reveal--delay-2" aria-label="Informações de contacto">
                <h3 className="contact-info__heading">Informações de Contacto</h3>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><i className="fa-solid fa-phone" aria-hidden="true"></i></div>
                  <div>
                    <div className="contact-info__label">Telefone</div>
                    <div className="contact-info__value"><a href="tel:+351000000000">+351 000 000 000</a></div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><i className="fa-solid fa-envelope" aria-hidden="true"></i></div>
                  <div>
                    <div className="contact-info__label">E-mail</div>
                    <div className="contact-info__value"><a href="mailto:info@simalian.pt">info@simalian.pt</a></div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><i className="fa-solid fa-location-dot" aria-hidden="true"></i></div>
                  <div>
                    <div className="contact-info__label">Localização</div>
                    <div className="contact-info__value">Portugal</div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><i className="fa-solid fa-clock" aria-hidden="true"></i></div>
                  <div>
                    <div className="contact-info__label">Horário</div>
                    <div className="contact-info__value">Seg–Sex: 8h–18h</div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
