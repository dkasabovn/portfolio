<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-12">
                <b-card class="block mb-3">
                    <h3>Robotics</h3>
                    <p>Software lead on QuadX 6299. Check out my 2019-2020 Repository</p>
                    <h6>Technologies</h6>
                    <ul>
                        <li>Java</li>
                        <li>Kotlin</li>
                        <li>Revextensions 2</li>
                        <li>FTC Dashboard</li>
                        <li>Fully Custom Pure-Pursuit</li>
                        <li>3 Tracking Wheel Odometry</li>
                        <li>Holonomic Control</li>
                    </ul>
                    <b-table borderless :items="robotics"></b-table>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12">
                <b-card class="block mb-3">
                    <h3>Academics</h3>
                    <p>Class of 2021 at Vandegrift HS</p>
                    <h6>Classes Taken</h6>
                    <ul>
                        <li>IB Computer Science 3 & 4</li>
                        <li>AP Computer Science A</li>
                        <li>AP BC & AB Calculus</li>
                        <li>AP HUG</li>
                        <li>AP WHAP</li>
                        <li>IB Physics</li>
                        <li>IB Design Tech</li>
                    </ul>
                    <b-table borderless :items="academics"></b-table>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12">
                <b-card class="block mb-3">
                    <h3>Competitive Programming</h3>
                    <p>I partake in USACO and Comp Sci UIL</p>
                    <h6>Training Used</h6>
                    <ul>
                        <li>Competitive Programming 3 Steven Halim</li>
                        <li>LeetCode</li>
                        <li>Hackerrank</li>
                        <li>USACO Training</li>
                    </ul>
                    <b-table borderless :items="compsci"></b-table>
                </b-card>
                <b-card class="block">
                    <h3>Self Learning</h3>
                    <p>To acquire new skills I take online courses or read books</p>
                    <h6>Resources</h6>
                    <ul>
                        <li>Udemy Robotics</li>
                        <li>Competitive Programming 3</li>
                        <li>Nuxt.js Documentation</li>
                        <li>USACO Training</li>
                        <li>Cracking the Coding Interview</li>
                    </ul>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            "robotics": [
                {"award": "1st Inspire Austin Metro League", "date": "Feb 2020"},
                {"award": "2nd Nomination Control Award", "date": "Feb 2020"},
                {"award": "2nd Inspire Worlds", "date": "April 2019"}
            ],
            "academics": [
                {"metrics": "SAT: 1560", "date": "Nov 2019"},
                {"metrics": "AP Computer Science: 5", "date": "May 2019"},
                {"metrics": "AP AB Calc: 5", "date": "May 2019"},
                {"metrics": "AP World History: 5", "date": "May 2019"}
            ],
            "compsci": [
                {"event": "RRHS UIL Jan. 20", "rank": "15 overall"},
                {"event": "Hackerrank Algorithms", "rank": "Gold"},
                {"event": "USACO 2020", "rank": "Gold"},
                {"event": "USACO 2019", "rank": "Silver"}
            ]
        }
    },
    mounted() {
        Prism.highlightAll()
    }
}
</script>

<style scoped>
</style>