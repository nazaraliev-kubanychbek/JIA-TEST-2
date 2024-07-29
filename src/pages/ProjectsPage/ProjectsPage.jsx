import { FirstSection } from "@components/ProjectsSections";
import bannerImage from "../../img/projectsBanner.png";
import classes from "./ProjectsPage.module.scss";
import ages1 from "../../img/projects-ages/2015.svg";
import ages2 from "../../img/projects-ages/2016.svg";
import ages3 from "../../img/projects-ages/2017.svg";
import ages4 from "../../img/projects-ages/2019.svg";
import ages5 from "../../img/projects-ages/2022.svg";

import vector_left from "../../img/vector-left.svg";
import vector_right from "../../img/vector-right.svg";

export const ProjectsPage = () => {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#051650" }}
      className="projects_page"
    >
      <section className={classes.projects_banner + " container"}>
        <div className={classes.projects_banner_content}>
          <h1 className={classes.banner_title}>
            бишкекский инвестиционный форум
          </h1>

          <div className={classes.projects_banner_date}>24-25 октябрь 2024</div>

          <div className={classes.projects_banner_advantages}>
            <div className={classes.projects_banner_advantages_block}>
              <div className={classes.content}>
                <h3 className={classes.projects_banner_title}>
                  20 <span>млн$</span>
                </h3>
                <p className={classes.projects_banner_desc}>
                  Общая сумма <br />
                  привлеченных инвестиций
                </p>
              </div>
            </div>
            <div className={classes.projects_banner_advantages_block}>
              <div className={classes.content}>
                <h3 className={classes.projects_banner_title}>198</h3>
                <p className={classes.projects_banner_desc}>
                  Количество проектов <br /> попавших в каталог
                </p>
              </div>
            </div>
            <div className={classes.projects_banner_advantages_block}>
              <div className={classes.content}>
                <h3 className={classes.projects_banner_title}>44</h3>
                <p className={classes.projects_banner_desc}>
                  Количество чемпионов проектов,
                  <br /> представленных на форуме
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.about_projects + " container "}>
        <h1 className={"title " + classes.about_project_title}>
          О ПРОЕКТЕ
        </h1>

        <div className={classes.about_content}>
          <div className={classes.about_logo}>BIF</div>
          <p className={classes.about_text_content}>
            Бишкекский Инвестиционный Форум - эта площадка, где встречаются МСБ
            с крупным бизнесом, внутренними и зарубежными инвесторами,
            представителями парламентариев и государственных структур,
            международных и местных организаций, посольств и бизнес сообщества.
            В рамках форума презентуются самые успешные и перспективные бизнес
            проекты, обсуждение ожидаемых трендов и изменения в экономике и
            бизнес среде и новые векторы сотрудничества для предпринимателей.
            <br />
            <br />
            BIF это уникальная возможность для презентации самых лучших бизнес
            проектов, поиска динамично растущего бизнеса для инвестиций и
            потенциальных инвесторов/бизнес партнеров для заключения реальных
            контрактов и соглашений.
            <br />
            <br />
            За прошедшие годы BIF продемонстрировал высокий спрос на платформу,
            где предприниматели могут встретиться напрямую с инвесторами и
            потенциальными партнерами в своей сфере деятельности. По результатам
            предыдущих лет, а именно с 2015 по 2022 были заключены успешные
            сделки на сумму более чем 20 $ млн. 
          </p>
        </div>
      </section>

      <section className={classes.history + " container"}>
        <h1 className={classes.history_title +' title'}>
          <img src={vector_right} alt="" />
          Истории
          <img src={vector_left} alt="" />
        </h1>
        <p className={classes.history_text}>
          Бишкекский Инвестиционный Форум является продуктом - Бизнес-Ассоциации
          JIA, которая реализуется при поддержке партнеров.
        </p>
        <div className={classes.history_ages}>
          <img src={ages1} alt="" />
          <img src={ages2} alt="" />
          <img src={ages3} alt="" />
          <img src={ages4} alt="" />
          <img src={ages5} alt="" />
        </div>
      </section>


<section className={classes.history_lines + ' section'}>
    <div className={classes.history_lines_block}>
        <h1 className={classes.history_lines_title}>
        2015 - “Разбуди деньги!”
        </h1>
        <div className={classes.history_lines_block_content}>
            <p>
            Первый Бишкекский Инвестиционный форум состоялся в 2015 году. Бишкекский инвестиционный форум выступил мостом, на котором успешные компании в быстро растущем секторе экономики встретились с потенциальными инвесторами, где каждый имел возможность найти источник для увеличения капитала. Основной целью форума является привлечение инвестиций в малый и средний бизнес, создание платформы для налаживания деловых контактов, а также обмен современными технологиями, идеями, навыками и опытом по развитию бизнеса.
            </p>
            <div className={classes.history_lines_video}>
                
            </div>
            
        </div>
    </div>
</section>
      {/* <FirstSection /> */}
    </div>
  );
};
