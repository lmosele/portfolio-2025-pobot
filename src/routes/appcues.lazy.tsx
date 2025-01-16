import { createLazyFileRoute } from '@tanstack/react-router'
import { Blurb, InnerContainer, SplashHeader, StyledH1, StyledH2, StyledH3, Text, Token, Breadcrumb } from '../components/Styled'
import { ChevronLeft } from 'react-feather'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/appcues')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <SplashHeader style={{ background: 'var(--appcues-accent-color)' }}>
        <InnerContainer>
          <Breadcrumb as={Link} to='/portfolio'><ChevronLeft size='16px' />Back to Portfolio</Breadcrumb>
          <StyledH1>Sprout Social: Table Analytics</StyledH1>
        </InnerContainer>
      </SplashHeader>
      <InnerContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <Blurb>
          <Token style={{ background: 'var(--appcues-accent-color)' }}>Project Date: 2018 - 2019</Token>
          <StyledH3>Role: Front-End Developer (Design Systems)</StyledH3>

          <StyledH2>Overview</StyledH2>
          <Text>As a product tool developed to onboard users, our customers were beginning to request deeper insights into their Appcues utilization metrics. As the sole maintainer of the Design System, I was responsible for embedding within the Analytics team to provide support and update our design system with analytics patterns.</Text>
        </Blurb>

        <img width={'80%'} src="/appcues-2.png" alt="Appcues" />

        <Blurb>
          <StyledH2>Goals</StyledH2>
          <Text>To enable our users to view analytics in a previously non-existent pattern for displaying data. I was to help build, design, test, and develop data visualization and segmentation UI for use throughout the app. Our team was small, with one product designer, a product manager, and two engineers. I was focused on building the UI and maintaining consistency with our design system.</Text>
        </Blurb>

        <Blurb>
          <StyledH2>            “How do we model complex technical needs as Designers?”
          </StyledH2>
          <Text>I was excited to introduce the design system to the team as a force multiplier when developing features. One of the core questions that came up during our initial planning stages was:


            This recurring dilemma of modeling the needs of a highly skilled design team (with previously little systems design experience) and a high performing engineering team (with previously little design experience) was one of the core aspects of this project that made it so enjoyable.

            Before we wrote any code or designed anything, we started by understanding each other’s needs. It was during this time that I introduced “Slot Driven Design” as a concept. SDD was my attempt at simplifying React-like paradigms into Figma-friendly patterns of thought.
          </Text>
        </Blurb>
        <img width={'50%'} src="/appcues-3.png" alt="Appcues" />
        <Blurb>
          <Text>Examples of how we modeled "slots" before auto-layout came around.</Text>
        </Blurb>
        <Blurb>
          <StyledH2>What Was SDD? </StyledH2>
          <Text>At the time, most designs were immutable - adding a button or an input to a layout meant a line of conversation from Design to Product to Engineering and back that would often swallow up days of productivity. </Text>
          <Text>SDD was an attempt at defining a model that closed the gap between the Designer’s layouts and the way a React developer would plan a layout. This meant that consideration was given around flexibility within a ruleset. Designers would create Containers that had Rules - special specs that allowed for a certain category of components and a flexible but limited column/row layout. </Text>
        </Blurb>
        <img width={'50%'} src="/appcues-4.png" alt="Appcues" />

        <Blurb>
          <StyledH2>Iteration</StyledH2>

          <Text>One of our biggest challenges was creating a new Table component capable of not only handling a wide variety of child elements and interactivity, but also large data sets. The table therefore had to be:</Text>

          <ul>
            <li>Performant</li>
            <li>Composable</li>
            <li>Filterable & Sortable</li>
            <li>Remarkably Flexible</li>
            <li>Responsive</li>
          </ul>

          <Text>With our new shared understanding and design philosophy, we delved quickly into the needs of our users. As it turns out, it was the first time our team had aligned on the needs of two users:The Consumer: These components were universal, and thus had to be usable throughout the application in both web and responsive forms. They had to be flexible enough to withstand product variations and needs, and make visually consistent decisions throughout all cases. Our engineers and designers needed to align on needs for the Design System to deliver.</Text>

          <Text>The User: The components had to be easy to use, snappy, and be responsive. Our users required pagination, filtering, and sorting regardless of what the table’s contents were. Accessibility was paramount, and lots of data was expected to be displayed at once.</Text>
        </Blurb>

        <Blurb>
          <StyledH2>Design</StyledH2>

          <Text>We began to define rules around our primitives: Table Headers, Table Rows, Collapsible Rows, Table Cells, and more. Each primitive then had Rules established - could a cell contain more than one slot? What elements was this slot designed for? By defining such things, designers were able to quickly create a framework of not just what things looked like but also how engineers could adapt in the ever-changing environment of product development.</Text>
        </Blurb>

        <img width={'50%'} src="/appcues-5.png" alt="Appcues" />

        <Blurb>
          <StyledH2>Data Binding</StyledH2>

          <Text>As the table was developed, I began to realize the difficulties of designing a composable layout with large monolithic data streams. </Text>
          <Text>This meant that while a single large JSON object was entering the DOM (and we had no control over that), we needed to allow a flexible enough API & Design that could handle a variety of data failures, row types, column sorting methods, and more. </Text>
          <Text>An expandable table row would have to not only be sortable, but maintain its opened state, and pass up the users selections for something like a comparison tool. Problems like these made the working stages of the process an exciting and difficult design challenge to address with designers. </Text>
        </Blurb>

        <img width={'80%'} src="/appcues-6.png" alt="Appcues" />

        <Blurb>
          <StyledH2>Development</StyledH2>

          <Text>Development was an intensive mix of design cycles, interaction design, and adjusting expectations based on changing data shapes. I focused largely on performance and pagination, which allowed us to load multi-thousand lines of data piecemeal without overloading the UI.</Text>
          <Text>To improve the table's developer experience, I also implemented React Table, a library that offered headless hooks that could plug in to our UI. This meant we only needed to focus on UI and interaction design, as well as proper best practices for displaying data.</Text>
        </Blurb>

        <img width={'50%'} src="/appecues-table.png" alt="Appcues" />

        <Blurb>
          <StyledH2>Results</StyledH2>

          <Text>We not only launched the product to great reviews, but developed a myriad of processes, components, and utilities that helped us move faster in every other way. The component is used to this day (2018-2024) with few changes in design or performance.</Text>
        </Blurb>

        <img width={'80%'} src="/appcues-7.png" alt="Appcues" />

        <Blurb>
          <StyledH2>Takeaways</StyledH2>

          <Text>Very early on it was clear that what we were designing was not a normal table layout. The added complexity of large datasets, interactivity, responsiveness and associated data visualizations made this process a test of our Design efficacy.</Text>
          <Text>Looking back, I think there were a couple of ways we could have done this better:</Text>

          <ul>
            <li>While we focused on alignment from Design - Dev early on, we did little to combat Developers breaking away from patterns due to lack of resourcing. </li>
            <li>Documentation could have been better as we implemented patterns. Unfortunately at the time, Storybook and Figma were largely separate universes for Designers and Developers, and making sure that sources of truth remained consistent day to day was difficult.</li>
            <li>More user testing would have led to a better overall product with a more usable layout. Although we did not have many complaints about the page’s hierarchy, some of the resulting effects of a two way interaction made things confusing.</li>
          </ul>
        </Blurb>



      </InnerContainer>

    </div>
  )
}