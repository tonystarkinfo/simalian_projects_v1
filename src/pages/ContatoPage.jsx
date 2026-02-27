import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { sanitize } from '../services/utils';
import { submitFormData } from '../services/formService';

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
  const { t } = useLanguage();

  function readFilesAsBase64(files) {
    return Promise.all(
      Array.from(files).map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ fileName: file.name, base64: reader.result });
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      )
    );
  }

  async function handleFormSubmit(e) {
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

    const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB
    const fileInput = form.anexos;
    const anexosErrorEl = document.getElementById('anexos-error');
    if (fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        if (fileInput.files[i].size > MAX_FILE_SIZE) {
          anexosErrorEl.classList.add('visible');
          fileInput.classList.add('error');
          fileInput.focus();
          return;
        }
      }
    }
    anexosErrorEl.classList.remove('visible');
    fileInput.classList.remove('error');

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

    if (fileInput.files.length > 0) {
      formData.anexos = await readFilesAsBase64(fileInput.files);
    }

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
          <span className="section-label section-label--light">{t('contact.label')}</span>
          <h1 className="page-header__title">{t('contact.title')}</h1>
          <p className="page-header__subtitle">{t('contact.subtitle')}</p>
        </div>
      </header>

      <main>
        <section className="section" aria-labelledby="form-heading">
          <div className="container">
            <div className="contact-layout">
              <div className="reveal">
                <h2 id="form-heading" className="sr-only">Formulário de Contato</h2>
                <form id="contactForm" noValidate onSubmit={handleFormSubmit}>
                  <div className="form-honey" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nome">{t('contact.nome')} <span className="required">*</span></label>
                      <input type="text" id="nome" name="nome" className="form-input" placeholder={t('contact.placeholderNome')} required autoComplete="name" aria-required="true" onBlur={handleBlur} onInput={handleInput} />
                      <div className="form-error" id="nome-error" role="alert">{t('contact.erroNome')}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="empresa">{t('contact.empresa')}</label>
                      <input type="text" id="empresa" name="empresa" className="form-input" placeholder={t('contact.placeholderEmpresa')} autoComplete="organization" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t('contact.email')} <span className="required">*</span></label>
                      <input type="email" id="email" name="email" className="form-input" placeholder={t('contact.placeholderEmail')} required autoComplete="email" aria-required="true" onBlur={handleBlur} onInput={handleInput} />
                      <div className="form-error" id="email-error" role="alert">{t('contact.erroEmail')}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefone">{t('contact.telefone')}</label>
                      <input type="tel" id="telefone" name="telefone" className="form-input" placeholder="+351 000 000 000" autoComplete="tel" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="servico">{t('contact.servico')} <span className="required">*</span></label>
                      <select id="servico" name="servico" className="form-select" required aria-required="true" onBlur={handleBlur} onInput={handleInput}>
                        <option value="">{t('contact.selectServico')}</option>
                        <option value="fabricacao">{t('contact.servicoFabricacao')}</option>
                        <option value="projetos">{t('contact.servicoProjetos')}</option>
                        <option value="montagem">{t('contact.servicoMontagem')}</option>
                        <option value="manutencao">{t('contact.servicoManutencao')}</option>
                        <option value="tratamentos">{t('contact.servicoTratamentos')}</option>
                        <option value="complementar">{t('contact.servicoComplementar')}</option>
                        <option value="completo">{t('contact.servicoCompleto')}</option>
                        <option value="outro">{t('contact.servicoOutro')}</option>
                      </select>
                      <div className="form-error" id="servico-error" role="alert">{t('contact.erroServico')}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="porte">{t('contact.porte')} <span className="required">*</span></label>
                      <select id="porte" name="porte" className="form-select" required aria-required="true" onBlur={handleBlur} onInput={handleInput}>
                        <option value="">{t('contact.selectPorte')}</option>
                        <option value="grande">{t('contact.porteGrande')}</option>
                        <option value="media">{t('contact.porteMedia')}</option>
                        <option value="pequena">{t('contact.portePequena')}</option>
                        <option value="particular">{t('contact.porteParticular')}</option>
                      </select>
                      <div className="form-error" id="porte-error" role="alert">{t('contact.erroPorte')}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mensagem">{t('contact.mensagem')} <span className="required">*</span></label>
                    <textarea id="mensagem" name="mensagem" className="form-textarea" placeholder={t('contact.placeholderMensagem')} required aria-required="true" onBlur={handleBlur} onInput={handleInput}></textarea>
                    <div className="form-error" id="mensagem-error" role="alert">{t('contact.erroMensagem')}</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="anexos">{t('contact.anexar')}</label>
                    <input type="file" id="anexos" name="anexos" className="form-input form-file" accept=".pdf,.dwg,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" multiple aria-describedby="anexos-hint" />
                    <span id="anexos-hint" className="form-hint">{t('contact.anexarHint')}</span>
                    <div className="form-error" id="anexos-error" role="alert">{t('contact.anexarError')}</div>
                  </div>
                  <button type="submit" className="btn btn--primary btn--orcamento btn--lg btn--full-width" id="submitBtn">
                    <span id="submitText">
                      <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                      {t('contact.enviar')}
                    </span>
                    <span id="submitLoading" className="form-loading-state">
                      <span className="spinner" aria-hidden="true"></span>
                      {t('contact.enviando')}
                    </span>
                  </button>
                  <div className="form-feedback form-feedback--success" id="formSuccess" role="alert">
                    <i className="fa-solid fa-circle-check form-feedback__icon" aria-hidden="true"></i>
                    <div>
                      <strong>{t('contact.successTitle')}</strong><br />
                      <span className="form-feedback__text">{t('contact.successText')}</span>
                    </div>
                  </div>
                  <div className="form-feedback form-feedback--error" id="formError" role="alert">
                    <i className="fa-solid fa-circle-exclamation form-feedback__icon" aria-hidden="true"></i>
                    <div>
                      <strong>{t('contact.errorTitle')}</strong><br />
                      <span className="form-feedback__text">{t('contact.errorText')}</span>
                    </div>
                  </div>
                </form>
              </div>
              <aside className="contact-info reveal reveal--delay-2" aria-label={t('contact.infoHeading')}>
                <h3 className="contact-info__heading">{t('contact.infoHeading')}</h3>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><i className="fa-solid fa-phone" aria-hidden="true"></i></div>
                  <div>
                    <div className="contact-info__label">{t('home.labelTelefone')}</div>
                    <div className="contact-info__value"><a href="tel:+351000000000">+351 000 000 000</a></div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><i className="fa-solid fa-envelope" aria-hidden="true"></i></div>
                  <div>
                    <div className="contact-info__label">{t('home.labelEmail')}</div>
                    <div className="contact-info__value"><a href="mailto:info@simalian.pt">info@simalian.pt</a></div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><i className="fa-solid fa-location-dot" aria-hidden="true"></i></div>
                  <div>
                    <div className="contact-info__label">{t('home.labelLocalizacao')}</div>
                    <div className="contact-info__value">{t('home.portugal')}</div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><i className="fa-solid fa-clock" aria-hidden="true"></i></div>
                  <div>
                    <div className="contact-info__label">{t('home.labelHorario')}</div>
                    <div className="contact-info__value">{t('contact.horarioValue')}</div>
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
