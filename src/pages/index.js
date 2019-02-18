import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = (props) => (
  <Layout>
    <h4>The work</h4>
   
    <Img fluid={props.data.imageOne.childImageSharp.fluid} /><p />
    
    <p class="centered">Nick Musaelian. <i>The Festival</i> 42"x48" central panel, 27"x36" side 
    panels.
    </p>
    <p>Here Playmobil figures gathered on the top of a cliff over the sea for the culmination of Nietzsche's 
      <i> Thus Spoke Zarathustra.</i> Having not painted with egg tempera before, I knew it would be perfect for 
      this Peter Bruegel style God's view of busy toy people searching for a prophet.
    </p>
    
    <p>Here is tempera painting up close:</p>
    <Img fluid={props.data.imageFour.childImageSharp.fluid} /><p />

    <h4>I did not mix my own paints</h4>
    <p>You can paint with egg tempera without breaking eggs.<br />
    There is probably some oil binder in egg tempera that is sold in tubes, and preservatives too, and <i>Sennelier</i> keeps
    its recipe secret, but nothing will convince you more that you are working with egg tempera straight 
    out of tubes than an occasional tube that smells of rotting decay when you open it. Throw that tube away and smell each tube before 
    you buy.<br />
    I don't work in 14th century workshop with apprentices who mix my paints. What makes or breaks my painting is not where 
    I get my paints, but the drawing. I rather spend time improving that because I need it for painting too: for mixing 
    those translucent egg tempera colors <i>optically</i>, otherwise they will turn into mud.<br />
    You hatch and crosshatch - that's how you mix colors - when the paint underneath is dry, which happens fast.<br />
    Ingres said: "Drawing contains everything, except the hue".<br />
    That is true for oil. In egg tempera, hue is also in the drawing.
    But if the form is weak no crosshatching will save it. "One must reach the point of singing true with the 
    <span id="back-note0"> pencil." <sup><a href="#note0"> 0</a></sup></span></p>
    
    <h4>I did not cook rabbit skin glue for my ground</h4>

    <p>You can find traditional recipes for a real gesso ground. If you decide to use contemporary 
      alternatives, don't buy cheep stuff. Use high quality medium to prevent oil from tempered hardboard to leach through 
      acrylic gesso, and high quality acrylic gesso specifically made for hard surfaces (not for canvas).<br /> 
      Prime both sides of your panel with equal number of layers. <br />
      Use 1/4" hardboard. 1/8" may warp even when cradled. <br />
      Use hard maple for the cradle, not softer poplar.<br />
      Tempered hardboard is less prone to warping. Don't paint on tempered (smooth) side if you use tempered hardboard. 
      Paint on the other side, and add enough layers to get it as smooth as you need it to be. <br />
      Large panels will be
      <span id="back-note1"> heavy <sup><a href="#note0"> 1</a></sup></span>. There are reasons why Venetians switched to oil on canvas.
  </p>    

    <h4>Drawing</h4>
    <p>
    Mistakes are cheaper to avoid than to correct. <br />
    This stage of Egg tempera painting is very different from the Oil painting where I am used to finding forms 
    <i> gradually</i>. I had to draw the entire composition on paper and then transfer it to the panel by 
    covering the back of the drawing with soft pencil, and then drawing hard over the outlines of each figure.<br />
    But that's only a small part of the preparation for painting. I drew toy people double the size of figures in the final painting, 
    to understand how to render the form with hatches and crosshatches:</p>

    <Img fluid={props.data.imageThree.childImageSharp.fluid} /><p />
    <p>Later, in the painting, that character in the pirate hat was given a knit hat instead, and the girl with a glass turned her 
      head away, while the policewoman and the hazmat man stared more pryingly.<br />(And what could the guy say in his defence? 
      "Officers, <span id="back-note2"><i> he who would not languish amongst men, must learn to drink out of dirty 
        glasses."</i> ?<sup><a href="#note2"> 2</a></sup></span>):
    </p>
    <Img fluid={props.data.imageTwo.childImageSharp.fluid} /><p />

    <p>
    <Img fluid={props.data.imageFive.childImageSharp.fluid} /><p />
    <p>Speaking of fixing mistakes, the Magician's cape turned out muddy the first time. 
       You can't paint over a bad part directly - you have to cover it with the gesso as if it never happened, before
       painting over it. </p>
    <Img fluid={props.data.imageSix.childImageSharp.fluid} />
    </p>

    <h4>The sea and the clouds</h4>
    <p>I painted the background in <span id="back-note3">oil <sup><a href="#note3"> 3</a></sup></span> 
    <i> alla prima</i> (wet on wet). <br />
       In this instance tempera would be too harsh, and will take away water's natural qualities. 
       But it is perfect for toys. It reveals and amplifies their symbolic medieval character.
       To reveal - that's the whole point.</p>

    <h4>More thinking</h4>
    <p>Tempera is too costly for opportunistic one-liners, or things you generally 
      want to <span id="back-note4">get away with. <sup><a href="#note4"> 4</a></sup></span> <br />
      It is not a medium, it is a <span id="back-note5"> discipline. <sup><a href="#note5"> 5 </a></sup></span>
      But don't be a technical purist. <br />
      More important is how you draw things.  You have to treat objects seriously, everything else is 
      <span id="back-note6"> tricks.<sup><a href="#note6"> 6</a></sup></span><br />
      Take how van Gogh painted a pair of shoes. He worked for immortality. Not his immortality, but for the immortality of
      what that pair of shoes symbolically<span id="back-note7"> meant.<sup><a href="#note6"> 7</a></sup></span></p>

    <h4>Quotes</h4>

    <p id="note0"><sup>0</sup> If I could make musicians of you all, you would thereby profit as painters. Everything in
    nature is harmony: a little too much, or else too little, disturbs the scale and makes a false note. One must reach 
    the point of singing true with the pencil or with brush quite as much as with the voice; rightness of form is like
    rightness of sounds...The simpler the lines and forms are, the more there is of beauty and of strength.
    Every time you divide up the forms, you weaken them. <br />-- Ingres<br />
    <a href="#back-note0">back</a></p>

    <p id="note1"><sup>1</sup> Tempera is not well adapted to works of large size. A tempera panel may be pushed say to 
    six or eight feet, in its largest dimension; but that puts some strain upon the natural scale of the method.<br /> 
    -- Daniel Thompson, <i>The Practice of Tempera Painting</i><br />
    <a href="#back-note1">back</a>
    </p>

    <p id="note2"><sup>2</sup> And he who would not languish amongst men, must learn to drink out of all glasses; 
    and he who would keep clean amongst men, must know how to wash himself even with dirty water. <br />
    -- Fredrich Nietzsche, <i>Thust Spoke Zarathustra</i><br />
    <a href="#back-note2">back</a></p>
    
    <p id="note3"><sup>3</sup> In practice, it is difficult to effect small incidental variations of color, such as are commonly 
    practiced in oil painting, and also perfectly smooth transitions from one color to another. The tendency of [tempera] is to 
    impose the use of methodical color changes in each area of the design separately. The painter is also subject to some limitations 
    in passing from one value to another. In the plastic medium of oil paint it is possible to blend adjacent values so perfectly 
    together that they merge in a continuous value progression. In tempera this can hardly be accomplished. The tones of the modeling, 
    the transition from one value to the next tend to be more evident; and these evidences of articulation, though valuable to the 
    painter of ideas, are troublesome to the painter of appearances...It is often an advantage to a portrait painter to be able to create the illusion of reality
    upon his canvas. It is often a disadvantage to a painter of the Crucifixion to have his work look like a tableau vivant. It is fatal 
    when his aim is to express some general aspect of the spiritual significance of his subject.<br />
    Tempera lends itself readily to any system of light and shade, abstract or scientific. But its limited value range, overbalanced 
    toward light, makes it less persuasive in a realistic scheme than oil painting. It is for this reason possible to use a scientific 
    arrangement of lights and darks to render form without obtaining an obviously realistic result; and this paradox is not without its 
    usefulness. Any system of light and shade may be employed in tempera, from the elementary, ideographic, medieval types, to the most 
    highly descriptive analysis of form. <br /> 
    -- Daniel Thompson, <i>The Practice of Tempera Painting</i><br />
     <a href="#back-note3">back</a></p>

    <p id="note4"><sup>4</sup> Art is what you can get away with. -- Andy Warhol<br />
    <a href="#back-note4">back</a></p>

    <p id="note5"><sup>5</sup> Five hundred years ago, Cennino d'Andrea Cennini, a painter who studied in Florence under Agnolo Gaddi, 
    the son and disciple of Taddeo Gaddi [who was a pupil and godson of Giotto], wrote a book about his profession. 
    Craftsmanship in painting was highly esteemed in his day; and he described in great detail all that he considered 
    it important for a painter to know, in a work called the Libro dell'Arte, the "book of the profession"...
    Painting in tempera as Cennino teaches it is a strict discipline, and discipline in the practice of painting has 
    long been out of style.<br /> -- Daniel Thompson, <i>The Practice of Tempera Painting</i><br />
    <a href="#back-note5">back</a></p>

    <p id="note6"><sup>6</sup> From <i>Picasso on Art (Selection of Views)</i> edited by Dore Ashton:<br />
    Picasso is opening a bottle of anise brought by Cela: "One has to be careful not to break the
    banderole! You have to take objects serously. And lovingly; this one very lovingly! Everything else is tricks."<br />
    "What do they mean by religious art? It's an absurdity. How can you make religous art one day and another kind the next?"<br />  
    <a href="#back-note6">back</a></p>

    <p id="note7"><sup>7</sup> Let us not complain as to the time or the labor we give...Malherbe, it said, worked with prodigious 
    slowness: yes, because he was working for immortality.<br />
    -- Ingres on Drawing from <i>Nineteenth-Century Theories of Art</i> by J.C.Taylor<br />
    <a href="#back-note7">back</a></p>

  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "paintings/triptych_w1000.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "paintings/from_all_glasses_w1000_p.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "drawings/from_all_glasses_w1000_d.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "paintings/vessles_w1000.jpg" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "drawings/magician_sooth_w1000_d.jpg" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "paintings/magician_sooth_w1000_p.jpg" }) {
      ...fluidImage
    }
  }
`