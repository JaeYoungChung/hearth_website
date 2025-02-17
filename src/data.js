import thumbsup from './assets/thumbs_up.png'
import share from './assets/share.png'
import popperHe from './assets/figure_popperHe.webp'
import mandela from './assets/figure_mandela.webp'
import galileo from './assets/figure_galileo.webp'
import aurelius from './assets/figure_aurelius.webp'
import nightingale from './assets/figure_nightingale.webp'
import hypatia from './assets/figure_hypatia.webp'
import zhuangzi from './assets/figure_zhuangzi.webp'
import camus from './assets/figure_camus.webp'
import senecaE from './assets/figure_senecaE.webp'
import rumi from './assets/figure_rumi.webp'
import ogai from './assets/figure_ogai.webp'
import franklin from './assets/figure_franklin.webp'
import davinci from './assets/figure_davinci.webp'
import napoleon from './assets/figure_napoleon.webp'
import gandhi from './assets/figure_gandhi.webp'
import hesse from './assets/figure_hesse.webp'
import einstein from './assets/figure_einstein.webp'
import chopin from './assets/figure_chopin.webp'
import gogh from './assets/figure_gogh.webp'
import byron from './assets/figure_byron.webp'
import helenkeller from './assets/figure_helenkeller.webp'
import mariecurie from './assets/figure_mariecurie.webp'
import senecaT from './assets/figure_senecaT.webp'
import edison from './assets/figure_edison.webp'
import alexander from './assets/figure_alexander.webp'
import augustus from './assets/figure_augustus.webp'
import popperHa from './assets/figure_popperHa.webp'
import carnegie from './assets/figure_carnegie.webp'
import hepburn from './assets/figure_hepburn.webp'
import theodore from './assets/figure_theodore.webp'


  export const getQuestions = (t) => [
    //0
    t("questions.q1"),
    t("questions.q2"),     
    t("questions.q3"),

    //3
    t("questions.q4"),
    t("questions.q5"),    
    t("questions.q6"),

    //6
    t("questions.q7"),
    t("questions.q8"),   
    t("questions.q9"),

    //9
    t("questions.q10"),
    t("questions.q11"),    
    t("questions.q12"),
    
    //12
    t("questions.q13"),
    t("questions.q14"),
    t("questions.q15"),

    //15
    t("questions.q16"),
    t("questions.q17"),
    t("questions.q18"),

    //18
    t("questions.q19"),
    t("questions.q20"),
    t("questions.q21"),

    //21
    t("questions.q22"),
    t("questions.q23"),
    t("questions.q24"),

    //24
    t("questions.q25"),
    t("questions.q26"),
    t("questions.q27"),

    //27
    t("questions.q28"),
    t("questions.q29"),
    t("questions.q30"),

    //30
    t("questions.q31"),
    t("questions.q32"),
    t("questions.q33"),

    //33
    t("questions.q34"),
    t("questions.q35"),
    t("questions.q36"),

    //36
    t("questions.q37"),
    t("questions.q38"),
    t("questions.q39"),

    //39
    t("questions.q40"),
    t("questions.q41"),
    t("questions.q42"),

    //42
    t("questions.q43"),
    t("questions.q44"),
    t("questions.q45"),

    //45
    t("questions.q46"),
    t("questions.q47"),
    t("questions.q48"),

    //48
    t("questions.q49"),
    t("questions.q50"),
    t("questions.q51"),

    //51
    t("questions.q52"),
    t("questions.q53"),
    t("questions.q54"),
  ];

//a = helm
//b = envisage
//c = attune
//d = reverie
//e = transcend
//f = harmonize
export const getResults = (t) => {
  const combinationTexts = {
    "a-b": t("results.a-b"),
    "a-c": t("results.a-c"),
    "a-d": t("results.a-d"),
    "a-e": t("results.a-e"),
    "a-f": t("results.a-f"),
    "b-a": t("results.b-a"),
    "b-c": t("results.b-c"),
    "b-d": t("results.b-d"),
    "b-e": t("results.b-e"),
    "b-f": t("results.b-f"),
    "c-a": t("results.c-a"),
    "c-b": t("results.c-b"),
    "c-d": t("results.c-d"),
    "c-e": t("results.c-e"),
    "c-f": t("results.c-f"),
    "d-a": t("results.d-a"),
    "d-b": t("results.d-b"),
    "d-c": t("results.d-c"),
    "d-e": t("results.d-e"),
    "d-f": t("results.d-f"),
    "e-a": t("results.e-a"),
    "e-b": t("results.e-b"),
    "e-c": t("results.e-c"),
    "e-d": t("results.e-d"),
    "e-f": t("results.e-f"),
    "f-a": t("results.f-a"),
    "f-b": t("results.f-b"),
    "f-c": t("results.f-c"),
    "f-d": t("results.f-d"),
    "f-e": t("results.f-e"),
  };
  return combinationTexts;
};

export const getResemble = (t) => {
  const resembleTexts = {
    "a-b": t("resemble.a-b"),
    "a-c": t("resemble.a-c"),
    "a-d": t("resemble.a-d"),
    "a-e": t("resemble.a-e"),
    "a-f": t("resemble.a-f"),
    "b-a": t("resemble.b-a"),
    "b-c": t("resemble.b-c"),
    "b-d": t("resemble.b-d"),
    "b-e": t("resemble.b-e"),
    "b-f": t("resemble.b-f"),
    "c-a": t("resemble.c-a"),
    "c-b": t("resemble.c-b"),
    "c-d": t("resemble.c-d"),
    "c-e": t("resemble.c-e"),
    "c-f": t("resemble.c-f"),
    "d-a": t("resemble.d-a"),
    "d-b": t("resemble.d-b"),
    "d-c": t("resemble.d-c"),
    "d-e": t("resemble.d-e"),
    "d-f": t("resemble.d-f"),
    "e-a": t("resemble.e-a"),
    "e-b": t("resemble.e-b"),
    "e-c": t("resemble.e-c"),
    "e-d": t("resemble.e-d"),
    "e-f": t("resemble.e-f"),
    "f-a": t("resemble.f-a"),
    "f-b": t("resemble.f-b"),
    "f-c": t("resemble.f-c"),
    "f-d": t("resemble.f-d"),
    "f-e": t("resemble.f-e"),
  };
  return resembleTexts;
};

export const getQuotes = (t) => {
  const quoteTexts = {
    "a-b": t("quote.a-b"),
    "a-c": t("quote.a-c"),
    "a-d": t("quote.a-d"),
    "a-e": t("quote.a-e"),
    "a-f": t("quote.a-f"),
    "b-a": t("quote.b-a"),
    "b-c": t("quote.b-c"),
    "b-d": t("quote.b-d"),
    "b-e": t("quote.b-e"),
    "b-f": t("quote.b-f"),
    "c-a": t("quote.c-a"),
    "c-b": t("quote.c-b"),
    "c-d": t("quote.c-d"),
    "c-e": t("quote.c-e"),
    "c-f": t("quote.c-f"),
    "d-a": t("quote.d-a"),
    "d-b": t("quote.d-b"),
    "d-c": t("quote.d-c"),
    "d-e": t("quote.d-e"),
    "d-f": t("quote.d-f"),
    "e-a": t("quote.e-a"),
    "e-b": t("quote.e-b"),
    "e-c": t("quote.e-c"),
    "e-d": t("quote.e-d"),
    "e-f": t("quote.e-f"),
    "f-a": t("quote.f-a"),
    "f-b": t("quote.f-b"),
    "f-c": t("quote.f-c"),
    "f-d": t("quote.f-d"),
    "f-e": t("quote.f-e"),
  };
  return quoteTexts;
};

export const getImages = (t) => {
  const resembleImages = {
    "a-b": popperHe,
    "a-c": mandela,
    "a-d": galileo,
    "a-e": aurelius,
    "a-f": nightingale,
    "b-a": hypatia,
    "b-c": zhuangzi,
    "b-d": camus,
    "b-e": senecaE,
    "b-f": rumi,
    "c-a": ogai,
    "c-b": franklin,
    "c-d": davinci,
    "c-e": napoleon,
    "c-f": gandhi,
    "d-a": hesse,
    "d-b": einstein,
    "d-c": chopin,
    "d-e": gogh,
    "d-f": byron,
    "e-a": helenkeller,
    "e-b": mariecurie,
    "e-c": senecaT,
    "e-d": edison,
    "e-f": alexander,
    "f-a": augustus,
    "f-b": popperHa,
    "f-c": carnegie,
    "f-d": hepburn,
    "f-e": theodore,
  };
  return resembleImages;
};