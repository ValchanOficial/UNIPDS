(async function main() {
  const button = document.getElementById('file-upload-btn');
  button.addEventListener('click', async () => {
    const availability = await Translator.availability({
      sourceLanguage: 'en',
      targetLanguage: 'pt',
    });
    if (availability === 'available') return;
    console.log('Translator availability:', availability);

    const translator = await Translator.create({
      sourceLanguage: 'en',
      targetLanguage: 'pt',
    });

    const availabilityLM = await LanguageModel.availability({
      sourceLanguage: 'en',
      targetLanguage: 'pt',
    });
    if (availabilityLM === 'available') return;
    console.log('LanguageModel availability:', availabilityLM);

    const languageModel = await LanguageModel.create({
      sourceLanguage: 'en',
      targetLanguage: 'pt',
    });

    const availabilityLD = await LanguageDetector.availability({
      sourceLanguage: 'en',
      targetLanguage: 'pt',
    });
    if (availabilityLD === 'available') return;
    console.log('LanguageDetector availability:', availabilityLD);

    const languageDetector = await LanguageDetector.create({
      sourceLanguage: 'en',
      targetLanguage: 'pt',
    });

    console.log('All services initialized successfully');
    console.log('Translator:', translator);
    console.log('LanguageModel:', languageModel);
    console.log('LanguageDetector:', languageDetector);
  });
})();
