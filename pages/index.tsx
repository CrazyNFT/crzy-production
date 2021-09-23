import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "./Components/Header";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Body from "./Components/Body";


const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  root: {
    backgroundColor: theme.palette.success.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexGrow:1,
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      
      <Header />
      <Container maxWidth="lg" className={classes.root}>
        <Body />
        {/* <Typography variant="h2">Hello Crzy World!</Typography> */}
      </Container>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non
        provident numquam tempore, ex asperiores autem voluptate aperiam a
        labore rerum suscipit quasi eveniet eaque, expedita repellendus, veniam
        dolore explicabo adipisci porro quibusdam! Illum illo ea sunt vitae
        inventore deserunt repellendus dolores enim sint dolorum autem obcaecati
        voluptatem itaque eos quas eveniet quo aperiam expedita dignissimos
        voluptas nemo, delectus nihil temporibus. Fuga sapiente eveniet ipsum in
        eius numquam molestias! Corrupti odio facilis vitae cumque officia quia
        exercitationem fugit eos quis. Nam incidunt ipsam dolore pariatur natus
        vitae consequatur veniam magnam consequuntur assumenda, dolores
        voluptate libero animi eligendi quis quisquam! Harum accusamus aut culpa
        doloribus rerum maiores animi odio ex atque totam, expedita, rem
        eligendi aliquam incidunt? Temporibus, accusamus velit ipsam, tenetur
        consequatur deserunt voluptate obcaecati tempore facere architecto sunt
        vitae, quibusdam eaque! Numquam hic quia architecto error praesentium,
        tempora aspernatur fuga in adipisci debitis dicta sit magnam aliquam.
        Reiciendis ex ducimus hic nesciunt, nemo, quos omnis odit quisquam a
        accusantium illo quam consequuntur aliquid voluptatibus ullam libero
        facilis? Officia totam itaque quo alias a laborum blanditiis. Saepe,
        porro sed. Saepe rem veniam harum ipsa fugiat eaque iste quaerat quam
        dolore? Ratione illo officia dolores quo quam quae iusto voluptatem vero
        nobis nulla ea alias voluptatum, et eum. Quisquam eius vitae,
        dignissimos quo architecto, consequuntur, placeat amet laudantium
        recusandae voluptates possimus est. Quia, sit? Cupiditate, numquam nam.
        Esse sequi consequatur, iure laboriosam autem, cum dicta nostrum
        perferendis fuga totam mollitia. Facilis quo quas cum deleniti obcaecati
        tempora corporis? Repudiandae voluptates reprehenderit necessitatibus
        eum quibusdam qui sint maiores. Illum sit veritatis perspiciatis placeat
        cumque atque soluta assumenda! Quaerat deserunt sed vitae voluptates
        voluptatem debitis sapiente iusto accusamus fugit corporis dolorem,
        aperiam corrupti. Eligendi, placeat, sint, corrupti quos laudantium
        asperiores corporis repellendus numquam similique possimus inventore.
        Ratione ad maiores fugit in, maxime earum. Asperiores sit similique
        voluptate nisi numquam sapiente, quidem laboriosam provident nobis modi
        nulla voluptatibus adipisci ab unde quod consequuntur laudantium sed,
        soluta molestiae ullam quisquam facere esse reiciendis. Qui
        reprehenderit reiciendis natus quod sequi ipsum iste, aliquam alias
        enim, labore ipsam consequatur eaque voluptatem, laboriosam corrupti.
        Debitis, nam voluptatem rerum iure ex at iusto delectus provident
        voluptatum, sed officia magni cumque ullam est dolore eum, consectetur
        sequi ad. Dolorum cumque iure tenetur officiis architecto minus ducimus,
        sed aliquid amet. Excepturi corrupti adipisci sit ab quod ea, porro id
        dolor harum, eveniet ducimus laborum accusamus nemo. Recusandae unde
        officia earum vero accusantium non veniam soluta quaerat optio obcaecati
        at, asperiores dolore quis itaque in sunt repellendus quisquam quo
        tempore totam doloremque nam! Fuga facere quos hic praesentium maiores
        culpa fugiat, sequi nihil aperiam nobis quisquam neque quod laudantium
        magnam minima architecto minus sed autem. Quae, deserunt atque. Enim
        asperiores facere amet ipsum unde iste sequi architecto impedit
        necessitatibus. Labore at optio ducimus obcaecati voluptates laborum,
        placeat neque. Placeat similique enim quas delectus mollitia autem nisi
        molestias quidem beatae unde sequi eos, saepe recusandae, dolorem
        accusamus? Aliquid fugiat enim veritatis harum. Ipsum odio laboriosam
        laborum tempora nisi dicta deserunt provident dolorem labore? Voluptatum
        veritatis maxime, saepe nesciunt, nostrum magni blanditiis, inventore
        perspiciatis voluptates non eveniet in! Dolorem atque eius molestias
        quisquam? Unde distinctio veritatis ipsa cumque beatae. Laudantium
        veritatis officiis repudiandae praesentium, dignissimos eum saepe
        nostrum recusandae, impedit reprehenderit eius earum ipsum laboriosam
        neque esse excepturi delectus distinctio ullam quod? Voluptatem hic
        reprehenderit commodi quia ducimus doloremque modi cum quaerat quam? Sed
        maiores voluptates quos omnis tenetur. Saepe iusto non ullam earum
        consequuntur in temporibus doloribus quasi ea perspiciatis laborum
        dolore, nesciunt est perferendis obcaecati deserunt dolores facere!
        Consequatur sequi dolorum veritatis fugiat, iusto error rerum aut beatae
        inventore dolores magni dolor illo nemo temporibus hic soluta numquam
        velit libero consectetur molestias doloremque iste nam consequuntur.
        Possimus animi vitae quibusdam impedit enim sunt perferendis voluptatem?
        Cumque cum, commodi dolor obcaecati nihil, laboriosam consequuntur
        provident natus modi ipsam perspiciatis aliquid quis? Dolore nam
        quibusdam quas cupiditate tenetur, officiis atque optio maxime doloribus
        dolor dolores necessitatibus eius recusandae perferendis velit, tempore
        numquam? Error labore reprehenderit unde soluta quisquam fugiat
        cupiditate in perferendis doloremque distinctio, velit voluptatem modi
        dolore. Nostrum necessitatibus fugit eius sunt atque voluptate sapiente.
        Suscipit provident iure praesentium eaque voluptatibus earum quia rerum
        delectus nulla laudantium eveniet natus dolorem optio modi voluptatem,
        repudiandae quidem architecto obcaecati autem iste neque ipsam sit.
        Distinctio quis iure quo, libero consequatur, commodi dicta laborum
        necessitatibus omnis cupiditate soluta ipsa culpa? Consectetur rem
        maiores, odit ex placeat dolor est quia natus culpa. Iste inventore
        perspiciatis maiores numquam quae cum eius corrupti, odit qui, ullam
        eligendi. Rem nisi ut quo sed nulla, consectetur praesentium error autem
        officia quisquam possimus expedita! Voluptatem consequuntur sed saepe
        quo fugit quibusdam ad adipisci, accusamus doloribus illum. Maxime magni
        voluptas quaerat mollitia nobis fuga temporibus. Sed, alias ad tenetur
        dicta quisquam harum vel quae voluptatum dolorum illum, quas labore et
        nobis earum perferendis.
      </Typography>

    </React.Fragment>
  );
}
