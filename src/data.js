import thumbsup from './assets/thumbs_up.png'
import share from './assets/share.png'

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
